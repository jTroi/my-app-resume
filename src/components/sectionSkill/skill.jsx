import styleSkill from './skill.module.css'
import CardSkill from './cardSkill/card'

import { mdiReact, mdiLanguageHtml5, mdiLanguageCss3,mdiLanguagePhp,mdiDocker,
      mdiGit, mdiGithub, mdiVuejs, mdiVuetify,mdiNodejs, mdiLanguageJavascript,
       mdiLanguageTypescript} from '@mdi/js';


const arr = [
  {name: "HTML 5", value:mdiLanguageHtml5},
  {name: "CSS 3", value:mdiLanguageCss3},
  {name: "JavaScript", value:mdiLanguageJavascript},
  {name: "Reactjs", value:mdiReact},
  {name: "Docker", value:mdiDocker},
  {name: "PHP", value:mdiLanguagePhp},
  {name: "Git", value:mdiGit},
  {name: "Github", value:mdiGithub},
  {name: "Vuejs", value:mdiVuejs},
  {name: "Vuetify", value:mdiVuetify},
  {name: "Node.js", value:mdiNodejs},
  {name: "TypeScript", value:mdiLanguageTypescript},
];

const SectionSkill = () => {

  return(
    <div className={styleSkill.mySkills}>
      <h1 className={styleSkill.title}>My SKILLS</h1>
      <section className={styleSkill.mySkillsCard}>
        {
          arr.map((item, index) => (
            <CardSkill icon={item.value} name={item.name}  />
          ))
        }
      </section>
    </div>
  )
};

export default SectionSkill;