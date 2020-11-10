import React, { useState } from "react"
import { Link } from 'gatsby'
import _ from "lodash"

const Download = () => {
  const [data, setData] = useState({
    title:
      "Arzuladığın spor programı burada, bahçeşehir studyomuzda sana özel kişisel programlar ile pilates ve yoga ders ayrıcalığını yaşa.",
    content: "Geç kalmadan ayrıcalıklı derslerimizi Ücretsiz Dene!",
    buttons: [
      {
        key: "android",
        text: "'den indir",
        title: "Google Play",
        link: "#",
        iconClass: "icofont-brand-android-robot",
      },
      {
        key: "ios",
        text: "'dan indir",
        title: "Play Store",
        link: "#",
        iconClass: "icofont-brand-apple",
      },
      {
        key: 'review',
        text: 'Dene',
        title: 'Ücretsiz',
        link: '#',
        iconClass: "icofont-paper",
      }
    ],
  })

  return (
    <section className="section download-area ptb_100">
      {/* Shapes Container */}
      <div className="shapes-container d-none d-sm-block">
        <div className="shape-2" />
        <div className="shape-3" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="download-text text-center">
              <h2>{data.title}</h2>
              <p className="my-3">{data.content}</p>
              <div className="button-group store-buttons">
                {_.map(data.buttons, button => {
                  return (
                    <Link
                      key={button.key}
                      to={button.link}
                      className="btn btn-bordered"
                    >
                      <i className={`icofont ${button.iconClass} dsp-tc`} />
                      <p className="dsp-tc">
                        <span>{button.title}</span>
                        <br />
                        {button.text}
                      </p>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download
