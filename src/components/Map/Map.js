import React from "react"

const Map = () => {
  return (
    <section className="section map-area">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6016.163743373084!2d28.700624!3d41.067203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xff188a5287baa738!2sBe.%20Pilates%20%26%20Yoga!5e0!3m2!1str!2sus!4v1602306031388!5m2!1str!2sus"
        style={{ border: 0 }}
        allowFullScreen
        width={100}
        height={100}
      />
    </section>
  )
}

export default Map
