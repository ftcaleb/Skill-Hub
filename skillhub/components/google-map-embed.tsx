interface GoogleMapEmbedProps {
  /** 
   * Google Maps embed URL
   * Default: Spaces Atrium on 5th, Sandton, South Africa
   */
  mapSrc?: string;
  /** Optional custom class names */
  className?: string;
}

export function GoogleMapEmbed({ 
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.0547891234!2d28.0565!3d-26.1075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sSpaces%20-%20Sandton%2C%20Atrium%20on%205th!5e0!3m2!1sen!2sza!4v1234567890",
  className = ""
}: GoogleMapEmbedProps) {
  return (
    <div className={`w-full h-full min-h-[400px] rounded-lg overflow-hidden ${className}`}>
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "400px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Office Location Map"
        className="w-full h-full"
      />
    </div>
  );
}
