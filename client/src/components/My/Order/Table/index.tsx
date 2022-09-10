import React from 'react';
import { Link } from 'react-router-dom';

import { useTable } from 'react-table';
import { StoreImg, Table, Td, Th, StoreInfo } from './style';

interface CellProps {
  storeId: number;
  storeName: string;
  storeImg: string;
}

const OrderTable = () => {
  const data = React.useMemo(
    () => [
      {
        col1: {
          storeId: 11,
          storeName: 'Hello',
          storeImg:
            'https://images.unsplash.com/photo-1580854256166-e01d8a34da4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        },
        col2: '자몽청(3kg) 1,000원 / 3개',
        col3: '3,000원',
        col4: '전라남도 여수시 11길 22',
        col5: '2022년 8월 20일 19시 20분',
        col6: '결제완료',
      },
      {
        col1: {
          storeName: 'Hello',
          storeImg:
            'https://images.unsplash.com/photo-1580854256166-e01d8a34da4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        },
        col2: '자몽청(3kg) / 3개',
        col3: '3,000원',
        col4: '전라남도 여수시 11길 22',
        col5: '2022년 11월 20일 19시 20분',
        col6: '결제완료',
      },
      {
        col1: {
          storeName: 'Hello',
          storeImg:
            'https://images.unsplash.com/photo-1580854256166-e01d8a34da4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        },
        col2: '자몽청(3kg) / 3개',
        col3: '3,000원',
        col4: '전라남도 여수시 11길 22',
        col5: '2022년 11월 20일 19시 20분',
        col6: '결제완료',
      },
      {
        col1: {
          storeName: 'Hello',
          storeImg:
            'https://images.unsplash.com/photo-1580854256166-e01d8a34da4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        },
        col2: '자몽청(3kg) / 3개',
        col3: '3,000원',
        col4: '전라남도 여수시 11길 22',
        col5: '2022년 11월 20일 19시 20분',
        col6: '결제완료',
      },
      {
        col1: {
          storeName: 'Hello',
          storeImg:
            'https://images.unsplash.com/photo-1580854256166-e01d8a34da4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        },
        col2: '자몽청(3kg) / 3개',
        col3: '3,000원',
        col4: '전라남도 여수시 11길 22',
        col5: '2022년 11월 20일 19시 20분',
        col6: '결제완료',
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: '가게',
        accessor: 'col1', // accessor is the "key" in the data
        Cell: ({ cell }: { cell: CellProps }) => (
          <StoreInfo>
            <StoreImg src={cell.storeImg} />
            <Link to={`/storeinfo/${cell.storeId}`}>
              <h4>{cell.storeName}</h4>
            </Link>
          </StoreInfo>
        ),
      },
      {
        Header: '상품',
        accessor: 'col2',
        maxWidth: 150,
      },
      {
        Header: '상품총액',
        accessor: 'col3',
        width: 80,
      },
      {
        Header: '배송지',
        accessor: 'col4',
        width: 120,
      },
      {
        Header: '주문날짜',
        accessor: 'col5',
        width: 120,
      },
      {
        Header: '주문현황',
        accessor: 'col6',
        width: 80,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      // @ts-ignore
      columns,
      data,
    });

  return (
    <Table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => {
          const { key, ...restHeaderGroupProps } =
            headerGroup.getHeaderGroupProps();
          return (
            <tr key={key} {...restHeaderGroupProps}>
              {headerGroup.headers.map(column => {
                const { key, ...restColumn } = column.getHeaderProps();
                return (
                  <Th key={key} {...restColumn}>
                    {column.render('Header')}
                  </Th>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody {...getTableBodyProps}>
        {rows.map(row => {
          prepareRow(row);
          const { key, ...restRowProps } = row.getRowProps();
          return (
            <tr key={key} {...restRowProps}>
              {row.cells.map(cell => {
                const { key, ...restCellProps } = cell.getCellProps();
                return (
                  <Td
                    key={key}
                    style={{
                      width: cell.column.width,
                      maxWidth: cell.column.maxWidth,
                    }}
                    {...restCellProps}
                  >
                    {cell.render('Cell')}
                  </Td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default OrderTable;
