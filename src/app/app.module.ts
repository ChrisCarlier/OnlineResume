import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SectionaboutmeComponent } from './sectionaboutme/sectionaboutme.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './sectionskills/skills.component';
import { SectionformationComponent } from './sectionformation/sectionformation.component';
import { SectionexperienceComponent } from './sectionexperience/sectionexperience.component';
import { SpeakingComponent } from './speaking/speaking.component';
import { ProgramComponent } from './program/program.component';
import { ProglanguageComponent } from './proglanguage/proglanguage.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionaboutmeComponent,
    NavbarComponent,
    FooterComponent,
    SkillsComponent,
    SectionformationComponent,
    SectionexperienceComponent,
    SpeakingComponent,
    ProgramComponent,
    ProglanguageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
