type Detail = {
  name: string;
  description: string;
};

const details: Array<Detail> = [];

class Api {
  getDetails = async (): Promise<Array<Detail>> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return details;
  };
}

export const api = new Api();
