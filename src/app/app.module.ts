import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SectionaboutmeComponent } from './sectionaboutme/sectionaboutme.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './sectionskills/skills.component';
import { SectionformationComponent } from './sectionformation/sectionformation.component';
import { SectionexperienceComponent } from './sectionexperience/sectionexperience.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionaboutmeComponent,
    NavbarComponent,
    FooterComponent,
    SkillsComponent,
    SectionformationComponent,
    SectionexperienceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
