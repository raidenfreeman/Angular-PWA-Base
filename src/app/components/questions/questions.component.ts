import { Component, OnInit } from "@angular/core";
import { QuestionsService } from "../../services";
import { Question } from "../../model";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.css"]
})
export class QuestionsComponent implements OnInit {
  constructor(private questionSrvc: QuestionsService) {}

  questions: Question[];
  ngOnInit() {
    this.questionSrvc.getQuestions().subscribe(x => this.questions = x);
  }
}
