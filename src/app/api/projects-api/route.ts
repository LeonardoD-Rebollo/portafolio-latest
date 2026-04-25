import { Projects } from '@/app/projects/projects-list';
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import { TecnologiesList } from '@/app/projects/tecnologies-list';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  if (!id) {
    return NextResponse.json(
      { error: 'El parámetro "id" es requerido.' },
      { status: 400 }
    );
  }

  const project = Projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return NextResponse.json(
      { error: 'Proyecto no encontrado.' },
      { status: 404 }
    );
  }
  const getImages = async (directory: string) => {
    try {
      const imagesDirectory = path.join(process.cwd(), 'public', directory);
      const files = await fs.readdir(imagesDirectory);
      return files.map((file) => path.join('/', directory, file));
    } catch (error) {
      console.error('Error leyendo las imágenes:', error);
      return [];
    }
  };

  const getTecnologies = async () => {
    const tecnologies = project.technologies;
    const tecnologiesData = TecnologiesList.filter((t) => tecnologies.includes(t.id));
    return tecnologiesData.map(({ id, name }) => ({ id, name }));
  };
  

  const projectTecnologies = await getTecnologies();
  const images = await getImages(project.imagesSrc);

  const data = {
    data: {
      ...project,
      projectTecnologies,
      images,
      
    },
    message: 'Datos obtenidos exitosamente',
  };

  return NextResponse.json(data, { status: 200 });
}
