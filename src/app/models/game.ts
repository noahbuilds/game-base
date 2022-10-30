export interface Game {
    background_image: string;
    name: string;
    released: string;
    website: string;
    description: string;
    metacritic_url: string;
    genres: Array<Genre>;
    parent_platforms: Array<ParentPlatform>;
    publishshers: Array<Publisher>;
    ratings: Array<Rating>;
    screenshots: Array<Screenshot>;
    trailers: Array<trailer>;
}

interface Genre {
    name: string;
}

interface ParentPlatform {
    platform: {
        name: string;
        slug: string;
    };
}

interface Publisher {
    name: string;
}

interface Rating {
    id: number;
}

interface Screenshot {
    image: string;
}

interface trailer {
    data: {
        max: string;
    };
}
