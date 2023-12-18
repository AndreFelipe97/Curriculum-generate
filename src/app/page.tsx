export default function Home() {
  return (
    <form className="bg-white rounded-lg mx-8 my-8 p-10 min-h-[75vh] overflow-auto">
      <h1 className="text-slate-900 font-bold text-xl">Seus dados</h1>
      <hr />
      <div className="mt-8 mb-4">
        <h3 className="mt-8 text-slate-900 text-lg font-bold">
          Informações pessoais
        </h3>
        <hr />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label
            htmlFor="name"
            className="block text-slate-900 font-bold text-sm mb-2"
          >
            Nome
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Nome"
          />
        </div>
        <div>
          <label
            htmlFor="lastname"
            className="block text-slate-900 font-bold text-sm mb-2"
          >
            Sobrenome
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
            id="lastname"
            type="text"
            placeholder="Sobrenome"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-slate-900 font-bold text-sm mb-2"
          >
            Telefone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            placeholder="Telefone"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-slate-900 font-bold text-sm mb-2"
          >
            E-mail
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="E-mail"
          />
        </div>
        <div>
          <label
            htmlFor="photo"
            className="block text-slate-900 font-bold text-sm mb-2"
          >
            Sua foto
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
            id="photo"
            type="file"
          />
        </div>
      </div>
      <div className="mt-8 mb-4">
        <h3 className="mt-8 text-slate-900 text-lg font-bold">
          Informações profissionais
        </h3>
      </div>
      <hr />
      <div className="grid grid-cols-2 gap-4 mt-4">
        {/* Empresa 1 */}
        <div className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="companyOne"
              className="block text-slate-900 font-bold text-sm mb-2"
            >
              Primeira empresa
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
              id="companyOne"
              type="text"
              placeholder="Nome da empresa"
            />
          </div>
          <div>
            <label
              htmlFor="totalYears"
              className="block text-slate-900 font-bold text-sm mb-2"
            >
              Total de anos na empresa
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
              id="totalYears"
              type="text"
              placeholder="Ex: 3 / 5 / 10"
            />
          </div>

          <div>
            <label
              htmlFor="activities"
              className="block text-slate-900 font-bold text-sm mb-2"
            >
              Atividades
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
              id="activities"
            />
          </div>
        </div>
        {/* Empresa 2 */}
        <div className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="companyTwo"
              className="block text-slate-900 font-bold text-sm mb-2"
            >
              Segunda empresa
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
              id="companyTwo"
              type="text"
              placeholder="Nome da empresa"
            />
          </div>

          <div>
            <label
              htmlFor="totalYears"
              className="block text-slate-900 font-bold text-sm mb-2"
            >
              Total de anos na empresa
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
              id="totalYears"
              type="text"
              placeholder="Ex: 3 / 5 / 10"
            />
          </div>
          <div>
            <label
              htmlFor="activities"
              className="block text-slate-900 font-bold text-sm mb-2"
            >
              Atividades
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
              id="activities"
            />
          </div>
        </div>
        {/* Empresa 3 */}
        <div className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="companyThree"
              className="block text-slate-900 font-bold text-sm mb-2"
            >
              Terceira empresa
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
              id="companyThree"
              type="text"
              placeholder="Nome da empresa"
            />
          </div>

          <div>
            <label
              htmlFor="totalYears"
              className="block text-slate-900 font-bold text-sm mb-2"
            >
              Total de anos na empresa
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
              id="totalYears"
              type="text"
              placeholder="Ex: 3 / 5 / 10"
            />
          </div>
          <div>
            <label
              htmlFor="activities"
              className="block text-slate-900 font-bold text-sm mb-2"
            >
              Atividades
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
              id="activities"
            />
          </div>
        </div>
        {/* Empresa 4 */}
        <div className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="companyFour"
              className="block text-slate-900 font-bold text-sm mb-2"
            >
              Quarta empresa
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
              id="companyFour"
              type="text"
              placeholder="Nome da empresa"
            />
          </div>

          <div>
            <label
              htmlFor="totalYears"
              className="block text-slate-900 font-bold text-sm mb-2"
            >
              Total de anos na empresa
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
              id="totalYears"
              type="text"
              placeholder="Ex: 3 / 5 / 10"
            />
          </div>
          <div>
            <label
              htmlFor="activities"
              className="block text-slate-900 font-bold text-sm mb-2"
            >
              Atividades
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
              id="activities"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button className="text-white bg-slate-900 flex justify-center items-center px-10 py-3 rounded-lg font-bold">
          Gerar
        </button>
      </div>
    </form>
  );
}
