import React, { useState, useEffect } from 'react';

// Определяем интерфейс для продукта
interface Product {
  id: number;
  name: string;
  price: number;
  kind: string;
  color: string;
}

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Функция для отправки запроса
  const fetchProducts = async () => {
    if (!query) return; // Если нет запроса, ничего не делать
    setLoading(true);
    setError(null); // Сброс ошибки перед запросом

    try {
      const response = await fetch(`https://francisco-shop.ru/api/search?name=${query}`);
      if (!response.ok) {
        throw new Error('Ошибка загрузки данных');
      }
      const data: Product[] = await response.json();
      setProducts(data); // Установка полученных данных в состояние
    } catch (error) {
      setError((error as Error).message); // Установка сообщения об ошибке
    } finally {
      setLoading(false); // Завершение загрузки
    }
  };

  // Эффект для вызова fetchProducts при изменении query
  useEffect(() => {
    fetchProducts();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Поиск товаров..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={fetchProducts}>Поиск</button>

      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {products.length > 0 ? (
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>Цена: {product.price} руб.</p>
              <p>Тип: {product.kind}</p>
              <p>Цвет: {product.color}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Нет товаров, соответствующих вашему запросу.</p>
      )}
    </div>
  );
};

export default Search;