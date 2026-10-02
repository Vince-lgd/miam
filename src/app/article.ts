export interface Article {
  id: string;
  nom: string;
  achete: boolean;
  description?: string;
  prix?: number;
  quantite: number;
}