import { Component } from './base-component';
import { Autobind } from '../decorators/autobind';
import { Validatable, validate } from '../util/validation';
import { projectState } from '../state/project-state';

export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        super('project-input', 'app', true, 'user-input');

        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

        this.configure();
    }

    configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }

    renderContent() { }

    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enterdDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;

        const validatableTitle: Validatable = {
            value: enteredTitle,
            required: true
        };

        const validatableDescription: Validatable = {
            value: enterdDescription,
            required: true,
            minLength: 5
        };

        const validatablePeople: Validatable = {
            value: Number(enteredPeople),
            required: true,
            min: 1,
            max: 5
        };

        if (!validate(validatableTitle) ||
            !validate(validatableDescription) ||
            !validate(validatablePeople)) {
            alert('Invalid input, try again!');
            return;
        } else {
            return [enteredTitle, enterdDescription, Number(enteredPeople)];
        }
    }

    private clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }

    @Autobind
    private submitHandler(event: Event) {
        event.preventDefault();
        const gatheredInput = this.gatherUserInput();

        if (Array.isArray(gatheredInput)) {
            const [title, desc, people] = gatheredInput;
            projectState.addProject(title, desc, people);
            this.clearInputs()
        }
    }
}