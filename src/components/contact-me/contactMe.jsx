import React from "react";
import styleContactMe from './contactMe.module.css'
import Icon from "@mdi/react";
import { mdiSendVariantOutline, mdiGithub, mdiEmail } from '@mdi/js';

const SectionContactMe = () => {

  return (
    <section className={styleContactMe.contactMe}>
      <h2 className={styleContactMe.title}>Contact Me</h2>

      <div className={styleContactMe.btnGroup}>
        <button className={styleContactMe.btn}>
          <Icon path={mdiEmail} size={1}/>
          Email
        </button>
        <button className={styleContactMe.btn}>
          <Icon path={mdiSendVariantOutline} size={1} rotate={-25}/>
          Telegram
        </button>
        <button className={styleContactMe.btn}>
          <Icon path={mdiGithub} size={1}/>
          GitHub
        </button>
      </div>
    </section>
  )
}

export default SectionContactMe;