import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.less']
})
export class QuestionDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#summnernote').summernote({
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
