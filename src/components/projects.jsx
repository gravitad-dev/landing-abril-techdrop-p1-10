import texts from "../utils/texts.json";

function Projects() {
  return (
    <main className="">
      {/* header */}
      <div className="max-w-3xl mx-auto text-center pb-10 md:pb-10 mt-14">
        <h1 className="text-5xl font-bold mb-7" style={{ color: "#3030FF" }}>
          {texts["section-eight"].title}
        </h1>
      </div>

      {/* Members */}
      <div className="flex flex-col lg:card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-200">
          <img
            src="https://res.cloudinary.com/db60chvpz/image/upload/v1715285861/EaseTech/tdzyuf4eqhv7umxhubnn.png"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            DESARROLLAMOS UNA PLATAFORMA TECNOLÓGICA PARA LA CREACIÓN DE
            APLICACIONES MÓVILES CON LA FUNCIÓN DE ARRASTRAR Y SOLTAR
          </h2>
          <p>
            Nuestra plataforma tecnológica revoluciona el desarrollo de
            aplicaciones móviles al ofrecer una interfaz fácil de usar de
            arrastrar y soltar. Con nuestro sistema intuitivo, los usuarios
            pueden crear fácilmente aplicaciones móviles personalizadas sin
            necesidad de amplios conocimientos de codificación. Esta plataforma
            innovadora agiliza el proceso de desarrollo y permite a individuos y
            empresas hacer realidad sus ideas de aplicaciones de manera rápida y
            eficiente. Ya sea que sea un desarrollador experimentado o un recién
            llegado al desarrollo de aplicaciones, nuestra plataforma simplifica
            el proceso, permitiéndole concentrarse en la creatividad y la
            funcionalidad.
          </p>
          <div className="card-actions justify-end">
            <a
              href="https://techdrop.blog.niobe.work/contacto/"
              target="blank_"
            >
              <button type="button" className="btn btn-primary">
                Ver más
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Projects;
