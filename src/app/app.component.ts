import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  images =[{
    "url":"../assets/test.png"
  },
  {
    "url":"../assets/test.png"
  },
  {
    "url":"../assets/test.png"
  },
  {
    "url":"../assets/test.png"
  },
  {
    "url":"../assets/test.png"
  },
  {
    "url":"../assets/test.png"
  }
  ,
  {
    "url":"../assets/test.png"
  }
  ,
  {
    "url":"../assets/test.png"
  }
  ,
  {
    "url":"../assets/test.png"
  }
  ,
  {
    "url":"../assets/test.png"
  }
  
];
selectedurl;
selectedimage(i){
  console.log(i)
  console.log(this.images[i]["url"])
this.selectedurl= this.images[i]["url"]
}
}
