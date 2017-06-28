/**
 * Created by larryjones on 6/27/17.
 */

import { List, Map, Set, Seq } from 'immutable';

describe('equals', () => {
  it('Should return true for two different maps with same items', () => {
    const one = Map({'a': 1});
    const another = Map({'a': 1});
    
    expect(one.equals(another)).toBe(true);
  });
  
  it('Should return true for two different maps with same items in different order', () => {
    const one = Map({'a': 1, 'b': 2});
    const another = Map({'b': 2, 'a': 1});
    
    expect(one.equals(another)).toBe(true);
  });
  
  it('Should return true for two different Lists with same items in same order', () => {
    const one = List.of(2, 1);
    const another = List.of(2, 1);
    
    expect(one.equals(another)).toBe(true);
  });
  
  it('Should return false for two different Lists with same items in different order',  () => {
    const one = List.of(1, 2, 3, 4);
    const another = List([1, 2, 4, 3]);
    
    expect(one.equals(another)).toBe(false);
  });
  
  it('Should return true for two different Sets with same items in different order', () => {
    const one = Set.of(2, 1);
    const another = Set.of(1, 2);
    
    expect(one.equals(another)).toBe(true);
  });
  
  it('should return false for two different Collections with same items', () => {
    const one = List.of(2, 1);
    const another = Set.of(1, 2);
    
    expect(one.equals(another)).toBe(false);
  });
  
  it('Should return false for two different Seqs on two different Collections with same itmes',
    () => {
      const one = List.of(2, 1);
      const another = Set.of(1, 2);
    
      expect(Seq(one).equals(Seq(another))).toBe(false);
    });
  
  it('Should return false for two different Seqs on unequal Collections with same itmes',  () => {
    const one = List.of(1, 2, 3, 4);
    const another = List([1, 2, 4, 3]);
    
    expect(Seq(one).equals(Seq(another))).toBe(false);
  });
  
  it('Should return true for two different Seqs on equal Collections',  () => {
    const one = Set.of(1, 2, 3, 4);
    const another = Set([1, 2, 4, 3]);
    
    expect(Seq(one).equals(Seq(another))).toBe(true);
  });
  
});
