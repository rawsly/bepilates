import React, { useState } from "react"
import _ from "lodash"
import PropTypes from "prop-types"

import Title from "../../components/Title/Title"

import {
  DETAILED_FORM_CLASS_TYPES,
  DETAILED_FORM_REASONS,
} from "../../constants"

const DetailedForm = ({ fromUrl }) => {
  const [pageData, setPageData] = useState({
    title: "Bahçeşehir Aletli Pilates'te 5 Yıllık Tecrübe",
    content: `Bahçeşehir pilates studyoları arasında hizmet kalitesi ve başarı grafiğiyle öne çıkan pilates studyomuzda, pilates ve yoga özel ve grup dersleri sunuyoruz. Bahçeşehir Bahçecity’s residence da bulunan Pilates studyomuzda Reformer pilates ve yoga özel derslerine özel ders paketleri ile, grup derslerine grup ders paketleriyle katılabilirsiniz.

    Yoga ve Pilates Özel dersleri ile hedeflerinize hızlı ve kolay bir şekilde ulaşabilirsiniz. Aletli Pilates özel dersleri ve yoga Özel dersleri ile tüm üyelerimizle birebir ilgilenip, arzu ettikleri hedeflerine ulaşmaları için azami gayret sarfediyoruz. Tüm özel dersleri özel odalarda paylaşımsız işliyoruz. Pilates ve yoga özel derslerinde kişisel egzersiz programları ile üyelerimize benzersiz bir ders deneyimi sunabiliyoruz.
    
    Pilatese yeni başlayan, hızlı ve kesin sonuç almak isteyen, duruş bozukluğu olan üyelerimize aletli pilates özel dersleri ile pilatese başlamalarını tavsiye ediyoruz. Reformer pilates ekipmanlarında sektörün önde gelen 1 numaralı ekipman üreticisi Stott Pilates ekipmanlarını tercih ediyoruz.
    
    Bahçeşehir pilates studyomuzda 1 Eylül 2014 ten beri 500’ün üzerinde üyemize hizmet ettik. 4 yıl içerisinde (1 Eylül 2018 itibariyle) 7000 saatin üzerinde ders işledik. Bahçeşehir pilates merkezimizde birçok üyemizi sağlığına, hedeflerine ulaştırdık. Tüm üyelerimize ilk günkü heyecanımızla bahçeşehir pilates studyomuzda hizmet etmeye devam ediyoruz. İlginiz için teşekkür ederiz.`,
  })

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    classType: "",
    reasons: [],
    healthProblems: "",
    from: fromUrl,
  })

  const handleChange = event => {
    const { target } = event
    const { value, name } = target
    setFormData({ ...formData, [name]: value })
  }

  const handleReasonSelect = reason => {
    const { value } = reason
    if (_.includes(formData.reasons, value)) {
      setFormData({
        ...formData,
        reasons: _.filter(formData.reasons, reason => reason !== value),
      })
    } else {
      setFormData({ ...formData, reasons: [...formData.reasons, value] })
    }
  }

  return (
    <section id="contact" className="contact-area bg-gray ptb_100">
      <div className="container">
        <Title title={pageData.title} />
        <div className="row">
          <div className="col-12">
            {/* Contact Box */}
            <div className="contact-box text-center">
              {/* Contact Form */}
              <form
                id="contact-form"
                method="POST"
                action="assets/php/mail.php"
              >
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            placeholder="Adınız"
                            required
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            placeholder="Soyadınız"
                            required
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="E-posta Adresiniz"
                            required
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            name="phone"
                            placeholder="Telefon Numaranız"
                            required
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-12 col-md-12">
                          <select
                            className="form-control form-select"
                            name="classType"
                            required
                            onChange={handleChange}
                            value={formData.classType}
                          >
                            <option value="" disabled hidden>
                              Ders Türü Seçin
                            </option>
                            {_.map(DETAILED_FORM_CLASS_TYPES, classType => (
                              <option
                                key={classType.key}
                                value={classType.value}
                              >
                                {classType.text}
                              </option>
                            ))}
                          </select>
                          <i className="icofont-curved-down form-select-icon" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-checkbox-label">
                        Hedefleriniz <span>(Birden fazla seçebilirsiniz)</span>
                      </label>
                      <div className="row">
                        {_.map(DETAILED_FORM_REASONS, reason => {
                          const isSelected = _.includes(
                            formData.reasons,
                            reason.value
                          )
                          return (
                            <div
                              key={_.uniqueId("formReason_")}
                              className="col-12 col-md-6 form-checkbox-item"
                              onClick={() => handleReasonSelect(reason)}
                            >
                              <div
                                className={`form-checkbox ${
                                  isSelected ? "form-checkbox-selected" : ""
                                }`}
                              >
                                {reason.text}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            name="healthProblems"
                            placeholder="Varsa Sağlık Problemleriniz"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-bordered form-submit-button"
                        type="submit"
                      >
                        Ücretsiz Dene
                      </button>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="form-content">{pageData.content}</div>
                  </div>
                </div>
                <input hidden value={fromUrl} name="from" />
              </form>
              <p className="form-message" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

DetailedForm.propTypes = {
  fromUrl: PropTypes.string.isRequired,
}

export default DetailedForm
