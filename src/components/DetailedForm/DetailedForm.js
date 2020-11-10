import React, { useState } from "react"
import _ from "lodash"
import PropTypes from "prop-types"
import { navigate } from 'gatsby'

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
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false);

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

  const isEmpty = (value) => _.isEmpty(_.trim(value));

  const validateForm = () => {
    const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    const { firstName, lastName, email, phone } = formData;
    if (isEmpty(firstName) || isEmpty(lastName) || isEmpty(email) || isEmpty(phone)) {
      setError("Lütfen tüm alanları doldurun.");
      return false;
    }

    const isEmailValid = EMAIL_REGEX.test(email);
    if (!isEmailValid) {
      setError("Email geçersiz.");
      return false;
    }

    return true;
  }

  const handleSubmit = e => {
    e.preventDefault()
    const note = [formData.classType, ...formData.reasons].join(", ")
    const body = new URLSearchParams({
      _agile_form_name: "Pilates ve Yoga Genel",
      _agile_domain: "bepilatesyoga",
      _agile_api: "dphvkv977o8qpu0m1aj194re81",
      _agile_redirect_url: "https://bepilatesyoga.com/tesekkurler/",
      tags: "web,lead",
      _agile_form_id: "6142607636430848",
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      note: note,
      Health: formData.healthProblems,
    })

    const isValid = validateForm();
    
    if (isValid) {
      setLoading(true);
      fetch("https://bepilatesyoga.agilecrm.com/formsubmit?cors=true", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body,
      })
        .then(res => res.text())
        .then(data => {
          setError("")
          setFormData({})
          console.log("res:", data)
          setLoading(false);
          navigate("/tesekkurler")
        })
        .catch(err => {
          setError("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.")
          setLoading(false);
          console.log("error: ", err)
        })
    }

  }

  return (
    <section className="contact-area bg-gray ptb_100">
      <div className="container">
        <Title title={pageData.title} />
        <div className="row">
          <div className="col-12">
            {/* Contact Box */}
            <div className="contact-box text-center">
              {/* Contact Form */}
              <form id="agile-form">
                <div style={{ display: "none", height: 0, width: 0 }}>
                  <input
                    type="hidden"
                    id="_agile_form_name"
                    name="_agile_form_name"
                    value="Pilates ve Yoga Genel"
                  />
                  <input
                    type="hidden"
                    id="_agile_domain"
                    name="_agile_domain"
                    value="bepilatesyoga"
                  />
                  <input
                    type="hidden"
                    id="_agile_api"
                    name="_agile_api"
                    value="dphvkv977o8qpu0m1aj194re8l"
                  />
                  <input
                    type="hidden"
                    id="_agile_redirect_url"
                    name="_agile_redirect_url"
                    value="https://bepilatesyoga.com/tesekkurler/"
                  />
                  <input
                    type="hidden"
                    id="_agile_form_id_tags"
                    name="tags"
                    value="web,lead"
                  />
                  <input
                    type="hidden"
                    id="_agile_form_id"
                    name="_agile_form_id"
                    value="6142607636430848"
                  />
                  <input hidden value={fromUrl} name="from" />
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <input
                            type="text"
                            maxLength={250}
                            id="agilefield-3"
                            className="form-control"
                            name="firstName"
                            placeholder="Adınız"
                            required
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <input
                            id="agilefield-21"
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
                            id="agilefield-13"
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
                            id="agilefield-1"
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
                                id={classType.id}
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
                            id="agilefield-23"
                            type="text"
                            maxLength={250}
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
                        disabled={loading}
                        className={`btn btn-bordered form-submit-button ${loading ? 'btn-loading' : ''}`}
                        type="submit"
                        onClick={handleSubmit}
                      >
                        {loading ? 'Gönderiliyor...' : 'Ücretsiz Dene'}
                      </button>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="form-content">{pageData.content}</div>
                  </div>
                </div>
              </form>
              {error && <p className="form-message">{error}</p>}
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
