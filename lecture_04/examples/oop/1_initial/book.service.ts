import { getRepository } from 'typeorm';
import { BookEntity } from '../book/book.entity';

export const listBook = async () => {
  return getRepository(BookEntity).find();
};

export const findByIdBook = async (id: number) => {
  return getRepository(BookEntity).findOne(id);
};

export const createBook = async (data: BookEntity) => {
  return getRepository(BookEntity).save(data);
};

export const updateBook = async (id: number, data: BookEntity) => {
  return getRepository(BookEntity).update({ id }, data);
};

export const deleteBook = async (id: number) => {
  return getRepository(BookEntity).delete(id);
};
