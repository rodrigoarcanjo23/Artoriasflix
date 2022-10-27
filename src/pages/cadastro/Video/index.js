import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categorias: '',
  });
  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromserver) => {
        setCategorias(categoriasFromserver);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // eslint-disable-next-line no-alert
        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
        })
          .then(() => {
            navigate('/');
          });
      }}
      >
        <FormField
          label="Titulo do video"
          name="titulo"
          value={values.titulo}
          // eslint-disable-next-line react/jsx-no-bind
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          // eslint-disable-next-line react/jsx-no-bind
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          // eslint-disable-next-line react/jsx-no-bind
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>

    </PageDefault>
  );
}
export default CadastroVideo;
