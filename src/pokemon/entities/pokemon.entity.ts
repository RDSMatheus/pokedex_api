import { Column, Entity, PrimaryColumn } from 'typeorm';
import { PokemonType, Stat } from '../interfaces/pokemon.interface';

@Entity('pokemon')
export class Pokemon {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  height: number;

  @Column()
  weight: number;

  @Column({ type: 'jsonb' })
  sprites: {
    official_artwork: string;
    showdown: string;
  };

  @Column({ type: 'jsonb' })
  types: PokemonType[];

  @Column({ type: 'jsonb' })
  stats: Stat[];

  @Column({ name: 'name_japanese' })
  nameJapanese: string;

  @Column({ name: 'total_power' })
  totalPower: number;
}
