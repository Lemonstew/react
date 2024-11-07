import React from "react";
import { Table } from "@chakra-ui/react";

function MyApp27(props) {
  return (
    <div>
      <h3>chakra ui table</h3>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>번호</Table.ColumnHeader>
            <Table.ColumnHeader>제목</Table.ColumnHeader>
            <Table.ColumnHeader>작성자</Table.ColumnHeader>
            <Table.ColumnHeader>읽기</Table.ColumnHeader>
            <Table.ColumnHeader>날짜</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>3030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>3030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>3030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>3030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>3030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  );
}

export default MyApp27;
