import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { NgClass } from "@angular/common";
import { Bot } from './app.bot'

@Component({
    selector: 'ang-comp',
    standalone: true,
    imports: [ FormsModule, NgOptimizedImage ],
    templateUrl: './app.component.html',
    styleUrls: [ './css/app.component.header.css', 
                 './css/app.component.main.css', 
                 './css/app.component.footer.css' ]
})
export class AngComponent {
    currentStep: Step = null;
    editingBot: Bot = null;

    stepCollection = [
        new Step('Authorize', true),
        new Step('Create', false),
        new Step('Profit', false),
    ];

    botCollection = [
        new Bot(1, 'text', true),
        new Bot(2, 'text', true),
        new Bot(3, 'text', false),
        new Bot(4, 'text', true),
        new Bot(5, 'text', true),
        new Bot(6, 'text', false),
        new Bot(7, 'text', true),
        new Bot(8, 'text', true),
        new Bot(9, 'text', false),
        new Bot(10, 'text', true),
        new Bot(11, 'text', true),
        new Bot(12, 'text', false)
    ];

    setCurrentStep(step: Step) {
        if (this.currentStep == step) {
            return;
        }
        
        this.currentStep = step;
        this.stepCollection.forEach(function(_step) {
            _step.isCurrentStep = _step == step;
        })
        console.log(`Current Step: ${step.name} | ${step.isCurrentStep}`);
    }

    changeBot(bot: Bot) {
        bot.IsActive = !bot.IsActive;
    }

    constructor() {
        if (this.stepCollection.length == 0) {
            /// TODO: Реализовать заполнение стадий у пользака.

            this.stepCollection.forEach(function(step) {
                step.isCurrentStep = false;
            });
        }

        let userCurrentStep = this.stepCollection.find(step => step.isCurrentStep == true);
        this.currentStep = userCurrentStep ?? this.stepCollection[0];
    }
}

export class Step {
    id: number = 1;
    isCurrentStep: boolean = false;
    name: string;

    constructor(_name: string, _isCurrentStep: boolean) {
        this.name = _name;
        this.isCurrentStep = _isCurrentStep;
        this.id = this.id + 1;
    }
}