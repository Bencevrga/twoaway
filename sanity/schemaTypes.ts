// sanity/schemaTypes.ts
import { type SchemaTypeDefinition } from 'sanity';
import currentTrip from './schemas/currentTrip';
import pastTrip from './schemas/pastTrip';

export const schemaTypes: SchemaTypeDefinition[] = [
  currentTrip,
  pastTrip,
];
