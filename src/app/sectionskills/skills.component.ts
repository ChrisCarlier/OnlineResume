import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsLangueElement = [
    {img:'https://png.icons8.com/office/40/31B8FF/france.png',langue:'Français',level:'Langue maternelle'},
    {img:'https://png.icons8.com/office/40/31B8FF/great-britain.png',langue:'English',level:'ELAO B2'},
    {img:'https://png.icons8.com/office/40/31B8FF/netherlands.png',langue:'Nederlands',level:'ELAO B1'}
  ];

  skillsProgramElement = [
    {img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Microsoft_Office_2013_logo.svg/220px-Microsoft_Office_2013_logo.svg.png', name:'Microsoft Office Suite'},
    {img:'http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/eclipse-icon.png', name:'Eclipse IDE'},
    {img:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Visual_Studio_2013_Logo.svg/990px-Visual_Studio_2013_Logo.svg.png', name:'Visual Studio'},
    {img:'https://upload.wikimedia.org/wikipedia/fr/thumb/3/32/Qt_Creator_Icon_Web.png/220px-Qt_Creator_Icon_Web.png', name:'Qt Creator'},
    {img:'https://services.pcsoft.com/recrutement/FR/res/logo-pcsoft_C268304F_.svg', name:'WinDev'}
  ];

  skillsProgLanguageElement = [
    {img:'https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/110/thumb_bigger_formation-java-11.png', name:'JAVA'},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxRzep6-CslVdq4sGiqhnKAmGgPqfieqN2fe8HA9_E8BNivmlE', name:'C#'},
    {img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png', name:'C++'},
    {img:'http://vikominstitute.com/wp-content/uploads/2017/06/feature_excel_vba.jpg', name:'VBA'},
    {img:'https://services.pcsoft.com/recrutement/FR/res/logo-pcsoft_C268304F_.svg', name:'WLanguage'},
    {img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/HTML5_logo_resized.svg/2000px-HTML5_logo_resized.svg.png', name:'HTML'},
    {img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png', name:'CSS'},
    {img:'https://antoineguillot.files.wordpress.com/2016/07/learn-javascript.png?w=344', name:'JavaScript'},
    {img:'https://image.freepik.com/icones-gratis/formato-de-arquivo-sql-simbolo_318-45794.jpg', name:'SQL'},
    {img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/220px-Angular_full_color_logo.svg.png', name:'Angular'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
