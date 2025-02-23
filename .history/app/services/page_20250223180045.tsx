import Image from "next/image";

const ServicesPage = () => {
  return (
    <>
      <section className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 bg-sky-200">
          <div className="sm:max-w-[640px] md:max-w-[768px] lg:max-w-[634.400px] xl:max-w-[788px] 2xl:max-w-[941.600px] m-auto mr-0 px-4 lg:pr-10">
            <div className="py-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card Layanan 1 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-sky-400 hover:shadow-2xl transition duration-300">
                  <div className="mb-4 flex justify-center">
                    <svg
                      className="w-10 h-10"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 512 512"
                      xmlSpace="preserve"
                    >
                      <g>
                        <path d="M360.102,240.012l10.156-10.266c0,0,15.609-13.406,33.406-7.328c30.984,10.578,66.781-0.875,91.609-25.734 c7.063-7.063,15.641-21.234,15.641-21.234c0.984-1.344,1.328-3.047,0.922-4.672l-1.922-7.906c-0.359-1.484-1.313-2.75-2.625-3.531 c-1.313-0.766-2.891-0.969-4.344-0.547l-60.984,16.969c-2.266,0.625-4.688-0.219-6.063-2.109l-28.015-38.594 c-0.859-1.172-1.219-2.641-1.016-4.063l5.641-41c0.297-2.234,1.891-4.047,4.063-4.656l64.406-17.922 c2.906-0.813,4.672-3.813,3.953-6.766l-2.547-10.359c-0.344-1.469-1.281-2.719-2.563-3.5c0,0-5.047-3.344-8.719-5.234 c-36.578-18.891-82.64-13.031-113.312,17.656c-22.656,22.656-31.531,53.688-27.375,83.156c3.203,22.656,1.703,34.703-8.078,45.047 c-0.891,0.922-3.703,3.734-8.047,8L360.102,240.012z" />
                        <path d="M211.383,295.418C143.024,361.652,68.461,433.715,68.461,433.715c-2.547,2.438-4,5.797-4.047,9.313 c-0.047,3.5,1.344,6.891,3.813,9.375l31.938,31.938c2.5,2.484,5.875,3.859,9.391,3.813c3.516-0.031,6.859-1.5,9.281-4.031 l139.328-140.953L211.383,295.418z" />
                        <path d="M501.43,451.371c2.484-2.484,3.859-5.859,3.813-9.375c-0.031-3.516-1.5-6.859-4.031-9.297L227.415,166.246 l-43.953,43.969L450.805,483.09c2.438,2.547,5.781,4,9.297,4.047s6.891-1.344,9.391-3.828L501.43,451.371z" />
                        <path d="M254.196,32.621c-32.969-12.859-86.281-14.719-117.156,16.141c-24.313,24.313-59.875,59.891-59.875,59.891 c-12.672,12.656-0.906,25.219-10.266,34.563c-9.359,9.359-24.313,0-32.734,8.422L3.29,182.527c-4.391,4.375-4.391,11.5,0,15.891 l43.016,43.016c4.391,4.391,11.516,4.391,15.906,0l30.875-30.875c8.438-8.422-0.938-23.375,8.438-32.719 c12.609-12.625,26.375-10.484,34.328-2.547l15.891,15.891l17.219,4.531l43.953-43.953l-5.063-16.688 c-14.016-14.031-16.016-30.266-7.234-39.047c13.594-13.594,36.047-33.234,57.078-41.656 C271.102,49.012,267.055,35.668,254.196,32.621z M194.571,103.48c-0.063,0.047,5.859-7.281,5.969-7.375L194.571,103.48z" />
                      </g>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                    Konstruksi Bangunan
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    Menyediakan solusi konstruksi bangunan yang inovatif dan
                    berkualitas tinggi untuk berbagai proyek.
                  </p>
                </div>
                {/* Card Layanan 2 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-sky-400 hover:shadow-2xl transition duration-300">
                  <div className="mb-4 flex justify-center">
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      version="1.1"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g>
                        <g>
                          <polygon points="227.441,282 223.678,327 288.322,327 284.559,282   " />
                          <path d="M299.721,462l-9.718-115h-68.006l-9.718,115c-0.003,0.036-0.007-0.022-0.01,0.014 c-1.188,12.473,2.8,24.401,11.229,33.67c8.429,9.271,19.972,14.352,32.501,14.352c12.529,0,24.072-5.117,32.501-14.387 c8.429-9.27,12.417-21.157,11.229-33.63C299.727,461.983,299.724,462.036,299.721,462z M266,466.177c0,5.502-4.498,9.963-10,9.963 c-5.502,0-10-4.461-10-9.963v-10.959c0-5.502,4.498-9.963,10-9.963c5.502,0,10,4.461,10,9.963V466.177z" />
                          <path d="M363.949,2l-33.743,100.914c-1.403,4.199-5.396,6.947-9.831,6.777c-4.423-0.17-8.204-3.207-9.281-7.5 L285.944,2H228v108.512c0,5.502-4.498,9.963-10,9.963c-5.502,0-10-4.46-10-9.963V2h-34v108.512c0,5.502-4.498,9.963-10,9.963 c-5.502,0-10-4.46-10-9.963V2h-49v163h302V2H363.949z" />
                          <path d="M105,237.375c0,13.67,10.446,24.625,24.117,24.625h89.167h75.432h89.167 c13.67,0,24.117-10.954,24.117-24.625V185H105V237.375z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                    Renovasi &amp; Perbaikan
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    Layanan renovasi dan perbaikan bangunan dengan pendekatan
                    profesional dan efisien untuk meningkatkan nilai properti
                    Anda.
                  </p>
                </div>
                {/* Card Layanan 3 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-sky-400 hover:shadow-2xl transition duration-300">
                  <div className="mb-4 flex justify-center">
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 512.035 512.035"
                      xmlSpace="preserve"
                    >
                      <g transform="translate(1 1)">
                        <g>
                          <g>
                            <path d="M511.017,204.688c0-2.56-0.853-4.267-2.56-5.973l-60.587-60.587c-1.509-1.509-3.021-2.348-5.12-2.523V67.768 c0.086-0.979-0.025-1.936-0.314-2.851c-0.328-1.15-0.919-2.132-1.773-3.084c-0.151-0.172-0.308-0.34-0.473-0.505L380.457,1.595 c-0.165-0.165-0.334-0.322-0.506-0.473c-0.952-0.854-1.934-1.445-3.083-1.773c-0.915-0.289-1.872-0.401-2.851-0.314H109.951 c-5.12,0-8.533,3.413-8.533,8.533v494.933c0,5.12,3.413,8.533,8.533,8.533h93.867h230.4c5.12,0,8.533-3.413,8.533-8.533V276.18 l65.707-65.519C510.164,208.955,511.017,207.248,511.017,204.688z M195.284,314.768V195.301h136.533v46.933l-31.165,31.536 l-11.501,11.536v-13.205c0-5.12-3.413-8.533-8.533-8.533h-42.667c-5.12,0-8.533,3.413-8.533,8.533v42.667H195.284z M195.284,135.568v-34.133h17.067v18.773L195.284,135.568z M340.351,178.235h-153.6h-5.12l81.92-81.92l81.92,81.92H340.351z M246.484,280.635h25.6v21.333l-6.657,7.133l-5.651,5.667h-13.292V280.635z M413.737,58.768h-30.72v-30.72L413.737,58.768z M118.484,16.101h247.467v51.2c0,5.12,3.413,8.533,8.533,8.533h51.2v72.533l-76.8,77.028v-30.095h17.067 c3.413,0,6.827-1.707,7.68-5.12c1.707-3.413,0.853-6.827-1.707-9.387l-102.4-102.4c-3.413-3.413-8.533-3.413-11.947,0 l-28.16,28.16V92.901c0-5.12-3.413-8.533-8.533-8.533h-34.133c-5.12,0-8.533,3.413-8.533,8.533v59.733 c0,1.578,0.326,2.992,0.925,4.195l-23.965,23.965c-2.56,2.56-3.413,5.973-1.707,9.387c0.853,3.413,4.267,5.12,7.68,5.12h17.067 v128c0,5.12,3.413,8.533,8.533,8.533h51.2h4.809l-45.941,46.077c-0.851,0.418-1.66,0.981-2.389,1.709 c-0.735,0.735-1.302,1.553-1.721,2.412l-25.588,25.664c-0.913,0.423-1.781,1.014-2.558,1.791 c-0.784,0.784-1.379,1.66-1.803,2.583l-24.65,24.724c-3.413,3.413-3.413,8.533,0,11.947l45.227,45.227h-64.853V16.101z M425.684,293.435v200.533H224.339l30.034-29.948L425.684,293.435z M203.817,490.555l-47.787-47.787l14.911-14.956l17.516,17.516 c1.707,1.707,3.413,2.56,5.973,2.56s4.267,0,5.973-2.56c3.413-3.413,3.413-8.533,0-11.947l-17.533-17.533l17.968-18.021 l30.286,29.581c1.707,1.707,3.413,2.56,5.973,2.56c1.707,0,4.267-0.853,5.12-2.56c3.413-3.413,3.413-8.533,0-11.947 l-29.525-29.525l18.319-18.374l18.032,18.032c1.707,1.707,3.413,2.56,5.973,2.56c2.56,0,4.267-0.853,5.973-2.56 c3.413-3.413,3.413-8.533,0-11.947l-18.05-18.05l18.319-18.374l30.45,30.45c1.707,1.707,3.413,2.56,5.973,2.56 c1.707,0,4.267-0.853,5.12-3.413c3.413-3.413,3.413-8.533,0-11.947l-29.44-29.44l18.347-18.347l17.92,17.92 c1.707,1.707,3.413,2.56,5.973,2.56c1.707,0,4.267-0.853,5.973-2.56c3.413-3.413,3.413-8.533,0-11.947l-17.92-17.92l17.92-17.92 l29.867,29.867c1.707,1.707,3.413,2.56,5.973,2.56s4.267-0.853,5.973-2.56c3.413-3.413,3.413-8.533,0-11.947l-29.867-29.867 l12.8-12.8c0.745-0.745,1.317-1.495,1.737-2.311l3.944-3.955l18.213,18.213c1.707,1.707,3.413,2.56,5.973,2.56 c1.707,0,4.267-0.853,5.973-2.56c3.413-3.413,3.413-8.533,0-11.947l-18.23-18.23l17.893-17.947l30.204,30.204 c1.707,1.707,3.413,2.56,5.973,2.56s4.267-0.853,5.973-2.56c3.413-3.413,3.413-8.533,0-11.947l-30.221-30.221l17.893-17.947 l18.302,18.302c1.707,1.707,3.413,2.56,5.973,2.56s4.267-0.853,5.973-2.56c3.413-3.413,3.413-8.533,0-11.947l-18.319-18.319 l18.319-18.374l48.64,48.64L203.817,490.555z" />
                            <path d="M33.151-0.965c-18.773,0-34.133,15.36-34.133,34.133v17.067v34.133v324.267v25.6c0,0.853,0,1.707,0.853,3.413 l25.6,68.267c0.853,2.56,4.267,5.12,7.68,5.12c3.413,0,6.827-2.56,7.68-5.12l25.6-68.267c0.853-1.707,0.853-2.56,0.853-3.413 v-25.6V84.368V50.235V33.168C67.284,14.395,51.924-0.965,33.151-0.965z M16.084,92.901h34.133v307.2H16.084V92.901z M16.084,58.768h34.133v17.067H16.084V58.768z M33.151,16.101c9.387,0,17.067,7.68,17.067,17.067v8.533H16.084v-8.533 C16.084,23.781,23.764,16.101,33.151,16.101z M50.217,432.528l-17.067,45.227l-17.067-45.227v-15.36h34.133V432.528z" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                    Desain Arsitektur
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    Menyediakan layanan desain arsitektur kreatif dan inovatif
                    untuk menciptakan bangunan yang unik dan fungsional.
                  </p>
                </div>
                {/* Card Layanan 4 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-sky-400 hover:shadow-2xl transition duration-300">
                  <div className="mb-4 flex justify-center">
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <path d="M16 11.1c0-1.5-1.5-2.8-3.2-3.3-1.3 1.5-3.9 2.4-6.4 2.4-0.1 0-0.3 0-0.4 0 0 0 0 0-0.1 0-0.1 0.3-0.1 0.5-0.1 0.8 0 2 2.2 3.6 5 3.6 0.2 0 0.4 0 0.6 0 0.4 0.5 1.7 1.4 3.4 1.4 0 0-0.8-0.4-0.8-1.8 0 0 0 0 0 0 0-0.6 2-1.8 2-3.1z"></path>
                      <path d="M13 4.6c0-2.5-2.8-4.6-6.4-4.6s-6.6 2.1-6.6 4.6c0 1.7 2 3.2 3 4 0 0 0 0 0 0 0 1.8-1.4 2.4-1.4 2.4 2.3 0 3.6-1.1 4.2-1.8 0.2 0 0.5 0 0.8 0 3.5 0.1 6.4-2 6.4-4.6z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                    Konsultasi Proyek
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    Menawarkan konsultasi menyeluruh untuk memastikan setiap
                    tahap proyek berjalan dengan lancar dan tepat sasaran.
                  </p>
                </div>
                {/* Card Layanan 5 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-sky-400 hover:shadow-2xl transition duration-300">
                  <div className="mb-4 flex justify-center">
                    <svg
                      version="1.1"
                      className="w-10 h-10"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 1200 1200"
                      enableBackground="new 0 0 1200 1200"
                      xmlSpace="preserve"
                    >
                      <path d="M175.901,775.15c1.34-84.942,24.997-161.363,67.555-227.438 c43.852-65.677,92.564-129.583,133.235-190.657c64.562-99.564,119.289-202.698,152.751-308.503 C541.073,15.363,567.479-3.406,600,0.513c36.243-2.225,61.341,17.08,70.558,48.04c35.234,114.567,91.42,214.71,153.502,308.503 c42.395,69.12,90.82,122.468,132.483,190.657c45.203,71.836,67.148,149.555,67.556,227.438 c-2.581,116.192-48.298,224.208-123.477,300.997C816.77,1156.717,706.456,1199.234,600,1200 c-116.136-2.474-223.853-48.567-300.247-123.852C219.352,992.028,176.667,881.708,175.901,775.15z M362.056,868.979 c2.782,61.17,51.377,105.853,105.836,106.588c61.717-2.731,105.123-52.149,105.837-106.588c0-21.519-5.505-40.283-16.514-56.297 c-12.101-15.747-24.03-32.046-33.776-47.664c-15.442-25.218-30.541-50.295-38.282-76.938c-2.001-10.009-7.756-14.262-17.265-12.761 c-9.008-2.002-15.013,2.252-18.015,12.761c-8.094,28.541-22.238,53.7-37.156,76.938c-10.493,17.509-23.069,31.136-34.151,47.664 C367.06,829.195,361.555,847.96,362.056,868.979z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                    Waterproofing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    Menyediakan solusi waterproofing yang handal dan tahan lama
                    untuk melindungi bangunan dari kebocoran serta kerusakan
                    akibat kelembapan.
                  </p>
                </div>
                {/* Card Layanan 6 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-sky-400 hover:shadow-2xl transition duration-300">
                  <div className="mb-4 flex justify-center">
                    <svg
                      version="1.1"
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 56 56"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 25.0468 42.3437 C 24.1562 43.4687 22.7030 42.8359 22.9609 41.4766 L 24.7421 31.7266 L 18.4140 31.7266 C 17.1249 31.7266 16.6796 30.6953 17.6874 29.4531 L 30.1562 13.5860 C 31.0468 12.4844 32.4999 13.1172 32.2655 14.4766 L 30.4609 24.2266 L 36.8124 24.2266 C 38.0780 24.2266 38.5234 25.2344 37.5390 26.4766 Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                    Electrical Engineering
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    Menyediakan layanan perancangan dan instalasi sistem
                    kelistrikan yang aman, efisien, dan sesuai standar untuk
                    mendukung infrastruktur modern.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5 bg-gray-800 text-gray-100">
          <div className="sm:max-w-[640px] md:max-w-[768px] lg:max-w-[399.600px] xl:max-w-[502px] 2xl:max-w-[604.400px] m-auto ml-0 px-4 lg:pl-10">
            <div className="py-20">
              <h3 className="mb-4 text-4xl font-bold">Our Services</h3>
              <p className="py-2 my-2">
                Kami menghadirkan solusi konstruksi yang menyeluruh dan
                inovatif, mulai dari pembangunan gedung baru hingga renovasi
                yang modern. Setiap layanan kami dirancang untuk memenuhi
                standar kualitas tertinggi dan disesuaikan dengan kebutuhan
                spesifik klien.
              </p>
              <p className="py-2 my-2">
                Layanan kami mencakup desain arsitektur kreatif, konsultasi
                proyek mendalam, serta penerapan teknologi waterproofing dan
                electrical engineering terkini. Dengan pendekatan terintegrasi,
                kami memastikan efisiensi, keamanan, dan keandalan dalam setiap
                tahap pengerjaan.
              </p>
              <p className="py-2 my-2">
                Komitmen kami adalah memberikan hasil yang optimal dengan
                inovasi, keandalan, dan kepuasan pelanggan sebagai prioritas
                utama. Percayakan proyek Anda kepada kami dan wujudkan visi
                konstruksi yang berkualitas dan berkelas.
              </p>
              <div className="py-2 my-2">
                <button className="btn text-sky-500 hover:text-white border-2 border-sky-500 hover:bg-sky-500">
                  Lihat Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 text-gray-700 py-20">
        <div className="container">
          <div className="w-full flex flex-row gap-4">
            <div className="w-1/5">
              <h3 className="text-4xl font-bold">Pengadaan Barang</h3>
            </div>
            <div className="w-4/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Alat Perlengkapan Kantor",
                    img: "/img/proc-office.jpg",
                  },
                  {
                    title: "Alat Kesehatan",
                    img: "/img/proc-medical.jpg",
                  },
                  {
                    title: "Alat Kebersihan",
                    img: "/img/proc-cleaning.jpg",
                  },
                  {
                    title: "Alat Elektronik",
                    img: "/img/proc-electronic.jpg",
                  },
                  {
                    title: "Seragam dan Pakaian",
                    img: "/img/proc-apparel.jpg",
                  },
                  {
                    title: "Souvenir",
                    img: "/img/proc-souvenir.jpg",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                  >
                    <Image src={item.img} alt="img" className="w-full" />
                    <h4 className="font-semibold text-lg mt-3">{item.title}</h4>
                    <a
                      href="/"
                      target="_blank"
                      className="mt-4 inline-block bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition duration-300"
                    >
                      Lihat Selengkapnya
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
