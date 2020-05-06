import { Component } from './base-component';
import * as Validation from '../util/validation';
import { AutoBind } from '../decorators/autobind';
import { projectState } from '../state/project-state';

// ProjectInput Class
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor () {
    super(
      'project-input',
      'app',
      true,
      'user-input'
    );

    this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

    // init methods
    this.configure();
  }

  configure () {
    this.element.addEventListener('submit', this.submitHandler);
  }

  renderContent() {}

  private clearInputs() {
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }

  private gatherUserInput(): [string, string, number] | void {
    const title: string = this.titleInputElement.value;
    const description: string = this.descriptionInputElement.value;
    const people: number = +this.peopleInputElement.value;

    const titleValidatable: Validation.Validatable = {
      value: title,
      required: true,
      minLength: 5
    }

    const descriptionValidatable: Validation.Validatable = {
      value: description,
      required: true,
      minLength: 5
    }

    const peopleValidatable: Validation.Validatable = {
      value: people,
      required: true,
      min: 1,
      max: 10
    }

    if (
      !Validation.validate(titleValidatable) &&
      !Validation.validate(descriptionValidatable) &&
      !Validation.validate(peopleValidatable)
    ) {
      alert('Invalid input, please try again!');
      return;
    } else {
      return [title, description, people]
    }
  }

  @AutoBind
  private submitHandler(event: Event) {
    event.preventDefault();

    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, description, people] = userInput;
      projectState.addProject(title, description, people);

      this.clearInputs()
    }
  }
}
