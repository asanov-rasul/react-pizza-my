import React, { useState } from "react";
import { Pagination, Card } from "antd";

const items = Array.from({ length: 450 }, (_, i) => ({
  id: i + 1,
  name: `Товар ${i + 1}`,
}));


const App = () => {
  const [current, setCurrent] = useState(1);

  // Получаем товары для текущей страницы
  const paginatedItems = items.slice((current - 1) * current );

  const onPageChange = (page) => {
    setCurrent(page);
  };

  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
        {paginatedItems.map((item) => (
          <Card key={item.id} title={item.name} style={{ width: 200 }}>
            Описание товара {item.id}
          </Card>
        ))}
      </div>

      <Pagination
        current={current}
        total={items.length}
        onChange={onPageChange}
        style={{ marginTop: 20 }}
      />
    </div>
  );
};

export default App;
