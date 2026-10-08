import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className={`relative w-full overflow-hidden py-16 px-8 md:px-16 lg:px-24`}
      style={{
        backgroundColor: "#171F33",
      }}
    >
      <Image
        src="/footer-bg.png"
        alt="footer backgroud image"
        fill
        sizes="100vw"
        className="object-cover opacity-75 pointer-events-none z-0 md:scale-150 object-top-right md:translate-y-1/8"
      />
      <div
        className={`absolute inset-0 bg-background opacity-84 pointer-events-none z-10`}
      />
      <div
        className={`max-w-7xl mx-auto flex justify-between items-start flex-col md:flex-row gap-10 relative z-20`}
      >
        {/* left side */}
        <div className={`flex items-center gap-4`}>
          <div>
            <Image src="/logo.png" alt="NECC's logo" width={48} height={48} />
          </div>

          <div className="flex flex-col">
            <h2
              className={`text-xl font-bold text-default opacity-50`}
            >
              NECC
            </h2>
            <p
              className={`text-sm text-default max-w-62.5 leading-snug mt-1`}
            >
              Núcleo de Estudantes de Ciências da Computação
            </p>
          </div>
        </div>

        {/* right side */}
        <div className={`flex flex-col gap-8`}>
          <div className="flex flex-col gap-3">
            <h3
              className={`text-xs font-bold tracking-[0.2em] text-default opacity-50 uppercase mb-1`}
            >
              Contacto
            </h3>
            <div
              className={`flex items-center gap-3 text-default`}
            >
              <a
                href="https://www.google.com/maps/search/?api=1&query=NECC+-+Núcleo+de+Estudantes+de+Ciências+da+Computação"
                className={`flex items-center gap-3 text-default hover:text-necc-cyan transition-colors duration-200 group`}
                aria-label="google maps link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* gps pin icon */}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_281)">
                    <path
                      d="M12.25 5.83325C12.25 9.91658 7 13.4166 7 13.4166C7 13.4166 1.75 9.91658 1.75 5.83325C1.75 4.44087 2.30312 3.10551 3.28769 2.12094C4.27226 1.13638 5.60761 0.583252 7 0.583252C8.39239 0.583252 9.72774 1.13638 10.7123 2.12094C11.6969 3.10551 12.25 4.44087 12.25 5.83325Z"
                      strokeWidth="1.16667"
                      stroke="currentColor"
                      strokeOpacity="0.7"
                    />
                    <path
                      d="M8.75 5.83325C8.75 6.79975 7.9665 7.58325 7 7.58325C6.0335 7.58325 5.25 6.79975 5.25 5.83325C5.25 4.86675 6.0335 4.08325 7 4.08325C7.9665 4.08325 8.75 4.86675 8.75 5.83325Z"
                      strokeWidth="1.16667"
                      stroke="currentColor"
                      strokeOpacity="0.7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_281">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span className="text-sm">
                  DI sala 1.03, Universidade do Minho, Braga
                </span>
              </a>
            </div>
            <div
              className={`flex items-center gap-3 text-default hover:text-necc-cyan transition-colors duration-200 group`}
            >
              <a
                href="mailto:necc@di.uminho.pt"
                className={`flex items-center gap-3`}
              >
                {/* email icon */}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_287)">
                    <path
                      d="M2.33332 2.33325H11.6667C12.3083 2.33325 12.8333 2.85825 12.8333 3.49992V10.4999C12.8333 11.1416 12.3083 11.6666 11.6667 11.6666H2.33332C1.69166 11.6666 1.16666 11.1416 1.16666 10.4999V3.49992C1.16666 2.85825 1.69166 2.33325 2.33332 2.33325Z"
                      strokeWidth="1.16667"
                      stroke="currentColor"
                      strokeOpacity="0.7"
                    />
                    <path
                      d="M12.8333 3.5L6.99999 7.58333L1.16666 3.5"
                      strokeWidth="1.16667"
                      stroke="currentColor"
                      strokeOpacity="0.7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_287">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span className="text-sm">
                  necc@di.uminho.pt
                </span>
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <h3
              className={`text-xs font-bold tracking-[0.2em] text-default opacity-50 uppercase mb-1`}
            >
              Social
            </h3>

            <div className={`flex items-center gap-4`}>
              <a
                href="https://www.instagram.com/necc.uminho/"
                className="text-default hover:text-necc-cyan transition-colors duration-200 group"
                aria-label="Instagram link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Insta icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.83332 1.66675H14.1667C16.4678 1.66675 18.3333 3.53223 18.3333 5.83341V14.1667C18.3333 16.4679 16.4678 18.3334 14.1667 18.3334H5.83332C3.53214 18.3334 1.66666 16.4679 1.66666 14.1667V5.83341C1.66666 3.53223 3.53214 1.66675 5.83332 1.66675Z"
                    strokeWidth="1.66667"
                    stroke="currentColor"
                  />
                  <path
                    d="M13.3333 10.0001C13.3333 11.841 11.8409 13.3334 9.99999 13.3334C8.15904 13.3334 6.66666 11.841 6.66666 10.0001C6.66666 8.15913 8.15904 6.66675 9.99999 6.66675C11.8409 6.66675 13.3333 8.15913 13.3333 10.0001Z"
                    strokeWidth="1.66667"
                    stroke="currentColor"
                  />
                  <path
                    d="M14.5833 5.83333C14.8134 5.83333 15 5.64679 15 5.41667C15 5.18655 14.8134 5 14.5833 5C14.3532 5 14.1667 5.18655 14.1667 5.41667C14.1667 5.64679 14.3532 5.83333 14.5833 5.83333Z"
                    fill="currentColor"
                    strokeWidth="1.66667"
                    stroke="currentColor"
                  />
                </svg>
              </a>

              {/* Discord icon */}
              <a
                href="https://bit.ly/LccDiscord"
                className="text-default hover:text-necc-cyan transition-colors duration-200 group"
                aria-label="Discorve invite link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_302)">
                    <path
                      d="M16.9308 3.64157C15.6342 3.04643 14.2658 2.62206 12.86 2.37907C12.8472 2.37657 12.8339 2.37821 12.8221 2.38375C12.8102 2.38929 12.8005 2.39845 12.7942 2.4099C12.6192 2.7224 12.4242 3.1299 12.2875 3.45157C10.772 3.22139 9.23048 3.22139 7.715 3.45157C7.56291 3.09515 7.39126 2.7474 7.20084 2.4099C7.19427 2.39871 7.18446 2.38977 7.17271 2.38426C7.16095 2.37876 7.14781 2.37695 7.135 2.37907C5.72904 2.62155 4.36061 3.04595 3.06417 3.64157C3.05319 3.64617 3.04389 3.65402 3.0375 3.66407C0.444171 7.53823 -0.266663 11.3166 0.0825038 15.0474C0.0841705 15.0657 0.0950038 15.0807 0.10917 15.0932C1.61883 16.2117 3.3076 17.0656 5.10334 17.6182C5.11599 17.622 5.1295 17.6218 5.14203 17.6176C5.15455 17.6135 5.16549 17.6055 5.17334 17.5949C5.55939 17.0703 5.90113 16.5145 6.195 15.9332C6.1991 15.9253 6.20147 15.9165 6.20194 15.9076C6.20242 15.8987 6.201 15.8897 6.19777 15.8814C6.19454 15.873 6.18958 15.8655 6.18321 15.8592C6.17685 15.8529 6.16922 15.848 6.16084 15.8449C5.62202 15.6387 5.10039 15.3902 4.60084 15.1016C4.59168 15.0963 4.58397 15.0888 4.5784 15.0798C4.57283 15.0708 4.56957 15.0606 4.56891 15.05C4.56825 15.0395 4.57022 15.0289 4.57462 15.0193C4.57903 15.0097 4.58574 15.0013 4.59417 14.9949C4.69937 14.9162 4.80273 14.8351 4.90417 14.7516C4.91304 14.7444 4.92374 14.7398 4.93507 14.7383C4.9464 14.7368 4.95792 14.7385 4.96834 14.7432C8.24167 16.2374 11.785 16.2374 15.02 14.7432C15.0305 14.7384 15.0422 14.7366 15.0537 14.7381C15.0652 14.7395 15.076 14.7442 15.085 14.7516C15.185 14.8332 15.29 14.9166 15.3958 14.9949C15.4042 15.0012 15.4108 15.0094 15.4153 15.0189C15.4197 15.0283 15.4218 15.0387 15.4213 15.0491C15.4208 15.0596 15.4177 15.0697 15.4124 15.0787C15.4071 15.0877 15.3997 15.0953 15.3908 15.1007C14.8924 15.392 14.3703 15.6407 13.83 15.8441C13.8216 15.8473 13.814 15.8522 13.8076 15.8586C13.8012 15.865 13.7963 15.8726 13.793 15.881C13.7898 15.8894 13.7884 15.8984 13.7889 15.9074C13.7894 15.9164 13.7917 15.9252 13.7958 15.9332C14.0958 16.5149 14.4392 17.0682 14.8167 17.5941C14.8244 17.6048 14.8354 17.6128 14.8479 17.617C14.8605 17.6212 14.874 17.6213 14.8867 17.6174C16.6854 17.0664 18.3769 16.2125 19.8883 15.0924C19.8957 15.0872 19.9019 15.0805 19.9065 15.0727C19.9111 15.065 19.914 15.0564 19.915 15.0474C20.3317 10.7332 19.2167 6.98573 16.9575 3.66407C16.9522 3.65286 16.943 3.64398 16.9317 3.63907L16.9308 3.64157ZM6.68334 12.7749C5.6975 12.7749 4.88584 11.8707 4.88584 10.7591C4.88584 9.64823 5.6825 8.74323 6.68334 8.74323C7.69167 8.74323 8.49667 9.65657 8.48084 10.7599C8.48084 11.8707 7.68417 12.7749 6.68334 12.7749ZM13.3292 12.7749C12.3433 12.7749 11.5317 11.8707 11.5317 10.7591C11.5317 9.64823 12.3275 8.74323 13.3292 8.74323C14.3375 8.74323 15.1425 9.65657 15.1267 10.7599C15.1267 11.8707 14.3383 12.7749 13.3292 12.7749Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_302">
                      <rect width="20" height="20" fill="currentColor" />
                    </clipPath>
                  </defs>
                </svg>
              </a>

              {/* Github icon */}
              <a
                href="https://github.com/NECC"
                className="text-default hover:text-necc-cyan transition-colors duration-200 group"
                aria-label="Github link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99999 1.66675C5.39749 1.66675 1.66666 5.40341 1.66666 10.0142C1.66666 13.7017 4.05416 16.8309 7.36582 17.9342C7.78249 18.0109 7.93416 17.7534 7.93416 17.5317C7.93416 17.3342 7.92749 16.8084 7.92332 16.1126C5.60499 16.6167 5.11582 14.9934 5.11582 14.9934C4.73749 14.0284 4.19082 13.7717 4.19082 13.7717C3.43416 13.2551 4.24832 13.2651 4.24832 13.2651C5.08416 13.3234 5.52416 14.1251 5.52416 14.1251C6.26749 15.4001 7.47499 15.0317 7.94916 14.8184C8.02582 14.2792 8.24082 13.9117 8.47916 13.7034C6.62916 13.4926 4.68332 12.7759 4.68332 9.57758C4.68332 8.66675 5.00832 7.92091 5.54082 7.33758C5.45499 7.12675 5.16916 6.27758 5.62249 5.12925C5.62249 5.12925 6.32249 4.90425 7.91416 5.98425C8.59396 5.79884 9.29535 5.70441 9.99999 5.70341C10.7049 5.70459 11.4065 5.79902 12.0867 5.98425C13.6775 4.90425 14.3758 5.12841 14.3758 5.12841C14.8308 6.27758 14.5442 7.12675 14.4592 7.33758C14.9925 7.92091 15.3158 8.66675 15.3158 9.57758C15.3158 12.7842 13.3667 13.4901 11.5108 13.6967C11.81 13.9542 12.0758 14.4634 12.0758 15.2426C12.0758 16.3576 12.0658 17.2584 12.0658 17.5317C12.0658 17.7551 12.2158 18.0151 12.6392 17.9334C14.2985 17.3767 15.741 16.3127 16.7627 14.8917C17.7845 13.4707 18.3339 11.7645 18.3333 10.0142C18.3333 5.40341 14.6017 1.66675 9.99999 1.66675Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
