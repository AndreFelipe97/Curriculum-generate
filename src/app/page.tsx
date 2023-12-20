"use client";
import { error } from "console";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IForm {
  name: string;
  lastname: string;
  phone: string;
  email: string;
  photo: string;
  companyOne: string;
  totalYearsOne: string;
  activitiesOne: string;
  companyTwo?: string;
  totalYearsTwo?: string;
  activitiesTwo?: string;
  companyThree?: string;
  totalYearsThree?: string;
  activitiesThree?: string;
  companyFour?: string;
  totalYearsFour?: string;
  activitiesFour?: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const onSubmit = (data: any) => {
    console.log(errors);
    console.log(data);
  };

  return (
    <form
      className="bg-white rounded-lg mx-8 my-8 p-10 min-h-[75vh] overflow-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-slate-900 font-bold text-xl">Seus dados</h1>
      <hr />
      <div className="mt-8 mb-4">
        <h3 className="mt-8 text-slate-900 text-lg font-bold">
          Informações pessoais
        </h3>
        <hr />
      </div>
      <div className="grid grid-rows-3 xl:grid-cols-2 gap-4">
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
            {...register("name", {
              required: "Campo obrigatório",
            })}
          />
          <p className="mt-2 text-red-500">
            {errors.name?.message ? String(errors.name?.message) : ""}
          </p>
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
            {...register("lastname", {
              required: "Campo obrigatório",
            })}
          />
          <p className="mt-2 text-red-500">
            {errors.lastname?.message ? String(errors.lastname?.message) : ""}
          </p>
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
            {...register("phone", {
              required: "Campo obrigatório",
            })}
          />
          <p className="mt-2 text-red-500">
            {errors.phone?.message ? String(errors.phone?.message) : ""}
          </p>
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
            {...register("email", {
              required: "Campo obrigatório",
            })}
          />
          <p className="mt-2 text-red-500">
            {errors.email?.message ? String(errors.email?.message) : ""}
          </p>
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
            {...register("photo", {
              required: "Campo obrigatório",
            })}
          />
          <p className="mt-2 text-red-500">
            {errors.photo?.message ? String(errors.photo?.message) : ""}
          </p>
        </div>
      </div>
      <div className="mt-8 mb-4">
        <h3 className="mt-8 text-slate-900 text-lg font-bold">
          Informações profissionais
        </h3>
      </div>
      <hr />
      <div className="grid grid-row-4 xl:grid-cols-2 gap-4 mt-4">
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
              {...register("companyOne", {
                required: "Campo obrigatório",
              })}
            />
            <p className="mt-2 text-red-500">
              {errors.companyOne?.message
                ? String(errors.companyOne?.message)
                : ""}
            </p>
          </div>
          <div>
            <label
              htmlFor="totalYearsOne"
              className="block text-slate-900 font-bold text-sm mb-2"
            >
              Total de anos na empresa
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
              id="totalYearsOne"
              type="text"
              placeholder="Ex: 3 / 5 / 10"
              {...register("totalYearsOne", {
                required: "Campo obrigatório",
              })}
            />
            <p className="mt-2 text-red-500">
              {errors.totalYearsOne?.message
                ? String(errors.totalYearsOne?.message)
                : ""}
            </p>
          </div>

          <div>
            <label
              htmlFor="activitiesOne"
              className="block text-slate-900 font-bold text-sm mb-2"
            >
              Atividades
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
              id="activitiesOne"
              {...register("activitiesOne", {
                required: "Campo obrigatório",
              })}
            />
            <p className="mt-2 text-red-500">
              {errors.activitiesOne?.message
                ? String(errors.activitiesOne?.message)
                : ""}
            </p>
          </div>
        </div>
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
              {...register("companyTwo")}
            />
          </div>

          <div>
            <label
              htmlFor="totalYearsTwo"
              className="block text-slate-900 font-bold text-sm mb-2"
            >
              Total de anos na empresa
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
              id="totalYearsTwo"
              type="text"
              placeholder="Ex: 3 / 5 / 10"
              {...register("totalYearsTwo")}
            />
          </div>
          <div>
            <label
              htmlFor="activitiesTwo"
              className="block text-slate-900 font-bold text-sm mb-2"
            >
              Atividades
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
              id="activitiesTwo"
              {...register("activitiesTwo")}
            />
          </div>
        </div>
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
              {...register("companyThree")}
            />
          </div>

          <div>
            <label
              htmlFor="totalYearsThree"
              className="block text-slate-900 font-bold text-sm mb-2"
            >
              Total de anos na empresa
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
              id="totalYearsThree"
              type="text"
              placeholder="Ex: 3 / 5 / 10"
              {...register("totalYearsThree")}
            />
          </div>
          <div>
            <label
              htmlFor="activitiesThree"
              className="block text-slate-900 font-bold text-sm mb-2"
            >
              Atividades
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
              id="activitiesThree"
              {...register("activitiesThree")}
            />
          </div>
        </div>
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
              {...register("companyFour")}
            />
          </div>

          <div>
            <label
              htmlFor="totalYearsFour"
              className="block text-slate-900 font-bold text-sm mb-2"
            >
              Total de anos na empresa
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
              id="totalYearsFour"
              type="text"
              placeholder="Ex: 3 / 5 / 10"
              {...register("totalYearsFour")}
            />
          </div>
          <div>
            <label
              htmlFor="activitiesFour"
              className="block text-slate-900 font-bold text-sm mb-2"
            >
              Atividades
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
              id="activitiesFour"
              {...register("activitiesFour")}
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
