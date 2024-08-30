export interface Product {
  id: string;
  title: string;
  images: {
    edges: Array<{
      node: {
        originalSrc: string;
        altText: string | null;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: {
        priceV2: Object;
      };
    }>;
  };
}

export async function fetchProducts(): Promise<Product[]> {
  const query = `
    {
      products(first: 16) {
        edges {
          node {
            id
            title
            images(first: 1) {
              edges {
                node {
                  originalSrc
                  altText
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  priceV2 {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': "2be97a9fcf9a7bdf77d923608f3a10ba" || '',
  };

  const response = await fetch(`https://test-store-pablo.myshopify.com/api/2024-07/graphql.json`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  const jsonResponse = await response.json();
  console.log(jsonResponse.data.products.edges.map((edge: { node: Product }) => edge.node))
  return jsonResponse.data.products.edges.map((edge: { node: Product }) => edge.node);
}
