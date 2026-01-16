export interface Member {
  name: string;
  role?: string;
  pictureUrl?: string;
}

export interface Person {
  name: string;
  pictureUrl: string;
}

export interface Division {
  slug: string;
  name: string;
  image: string;
  description: string;
  coordinator: Person;
  members: Member[];
}
