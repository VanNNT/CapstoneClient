import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.less']
})
export class NewQuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#summernote').summernote({
      height: 200,
      toolbar: [
        ['style', ['bold', 'italic', 'underline']],
        ['fontsize', ['fontsize','color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['fullscreen',['fullscreen']]
      ],
      callbacks: {

      }
    });
  }

}
