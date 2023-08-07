import test from 'node:test'
import { describe, it } from 'node:test';
import assert from 'node:assert/strict'
import { suma,resta,multi,div,operador} from './index.js'


describe ("comprobar test unitarios",()=>{

it('la funcion debe sumar', () => {
  const result = suma(4, 2);
  assert.strictEqual(result, 6)
})

it('la funcion debe restar',()=>{
  const result = resta(2,1);
  assert.strictEqual(result,1)
})

it('la funcion debe multiplicar',()=>{
  const result = multi(3,3);
  assert.strictEqual(result,9)
})

it('la funcion debe dividir',()=>{
  const result = div(10,2);
  assert.strictEqual(result,5)
})

it('operador resto',()=>{
  const result = operador(10,3);
  assert.strictEqual(result,1)
})




})
