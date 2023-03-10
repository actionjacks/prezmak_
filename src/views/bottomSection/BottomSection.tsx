import '../bottomSection/bottom_section.scss'

import emailjs from '@emailjs/browser'
import { useRef } from 'react'

import AnimeBox from '../../components/AnimBox/AnimeBox'

interface BottomSectionProps {
  popupOnClick: (state: boolean, infoText: string) => void
  popUpState?: boolean
}

function BottomSection({ popupOnClick, popUpState }: BottomSectionProps) {
  const formRef = useRef<any>(null) //TODO - types

  const sendForm = async () => {
    if (!formRef.current) {
      return
    }
    const from_name = formRef?.current?.[0].value
    const from_tel = formRef?.current?.[1].value
    const message = formRef?.current?.[2].value

    if (!from_name || !from_tel || !message) {
      popupOnClick(true, 'Nie wszystkie pola zostały wypełnione.')
      return
    }
    popupOnClick(true, 'Wysyłanie wiadomości.')

    await emailjs
      .sendForm(
        'service_q4m544v',
        'template_44pv9ja',
        formRef.current ?? '',
        '-Oj_VJeVHwEOei9Ly',
      )
      .then(
        () => {
          popupOnClick(true, 'Wiadomość została wysłana.')
        },
        () => {
          popupOnClick(true, 'Niestety Wiadomość nie została wysłana. :(')
        },
      )
    // eslint-disable-next-line no-unsafe-optional-chaining
    const resetValues = [...formRef.current?.elements].forEach((el) => {
      el.value = ''
    })
  }

  return (
    <>
      <div className="section bottom">
        <AnimeBox>
          <p className="section-title">MASZ PYTANIA ?</p>
        </AnimeBox>
        <div className="form-wrapper">
          <p
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className="form-title"
          >
            Chcesz wycenić transport lub paczkę UK-PL? Napisz do nas teraz
          </p>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className="form"
          >
            <form ref={formRef}>
              <div className="form__group field">
                <input
                  type="input"
                  className="form__field"
                  placeholder="Email"
                  name="from_name"
                  id="name"
                  required
                />
                <label htmlFor="from_name" className="form__label">
                  Email
                </label>
              </div>

              <div className="form__group field">
                <input
                  type="input"
                  className="form__field"
                  placeholder="Telefon"
                  name="from_tel"
                  id="name"
                  required
                />
                <label htmlFor="from_tel" className="form__label">
                  Telefon
                </label>
              </div>

              <div className="form__group field">
                <textarea
                  className="form__field"
                  placeholder="Wiadomość"
                  name="message"
                  id="name"
                  required
                />
                <label htmlFor="message" className="form__label">
                  Wiadomość
                </label>
              </div>
            </form>
          </div>

          <div data-aos="fade-up" className="button-wrapper">
            <button onClick={sendForm} disabled={popUpState} className="send_button">
              Prześlij wiadomość
            </button>
          </div>
          <AnimeBox>
            <p className="text">
              Wyjazd z Polski w każdy piątek, z Anglii w każdą niedzielę. Możliwość
              negocjacji cen, jesteśmy elastyczni na Twoje potrzeby.
            </p>
          </AnimeBox>
          <AnimeBox>
            <p className="text">Zniżka dla stałych klientów.</p>
          </AnimeBox>
        </div>

        <div className="footer-wrapper">
          <div className="icons-box fb">
            <a href="https://www.facebook.com/profile.php?id=100065218353850">
              <img className="box-icon" src="fb-icon.png" alt="icon-facebook" />
            </a>
            <div className="footer-data">
              <p className="ovner">Prezmak - 2023 firma-prezmak@tlen.pl</p>
              <p className="author">realizacja actionjacks22@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BottomSection
