import React, { memo, useContext } from "react";
import { Table } from "rsuite";
import GraphContext from "../context/GraphContext";
const { Column, HeaderCell, Cell } = Table;
const TableItem = () => {
  const context = useContext(GraphContext);
  const { data } = context;
  return (
    <div>
      <Table virtualized height={700} data={data}>
        <Column width={130}>
          <HeaderCell>Date</HeaderCell>
          <Cell dataKey="Date" />
        </Column>

        <Column width={130}>
          <HeaderCell>Time</HeaderCell>
          <Cell dataKey="Time" />
        </Column>
        <Column width={130}>
          <HeaderCell>vdc1</HeaderCell>
          <Cell dataKey="vdc1" />
        </Column>
        <Column width={130}>
          <HeaderCell>idc1</HeaderCell>
          <Cell dataKey="idc1" />
        </Column>
        <Column width={130}>
          <HeaderCell>idref1</HeaderCell>
          <Cell dataKey="idref1" />
        </Column>
        <Column width={130}>
          <HeaderCell>rpm1</HeaderCell>
          <Cell dataKey="rpm1" />
        </Column>
        <Column width={130}>
          <HeaderCell>tesc1</HeaderCell>
          <Cell dataKey="tesc1" />
        </Column>
        <Column width={130}>
          <HeaderCell>tmot1</HeaderCell>
          <Cell dataKey="tmot1" />
        </Column>

        {/* 2 */}
        <Column width={130}>
          <HeaderCell>vdc2</HeaderCell>
          <Cell dataKey="vdc2" />
        </Column>
        <Column width={130}>
          <HeaderCell>idc2</HeaderCell>
          <Cell dataKey="idc2" />
        </Column>
        <Column width={130}>
          <HeaderCell>idref2</HeaderCell>
          <Cell dataKey="idref2" />
        </Column>
        <Column width={130}>
          <HeaderCell>rpm2</HeaderCell>
          <Cell dataKey="rpm2" />
        </Column>
        <Column width={130}>
          <HeaderCell>tesc2</HeaderCell>
          <Cell dataKey="tesc2" />
        </Column>
        <Column width={130}>
          <HeaderCell>tmot2</HeaderCell>
          <Cell dataKey="tmot2" />
        </Column>
        {/* 3 */}
        <Column width={130}>
          <HeaderCell>vdc3</HeaderCell>
          <Cell dataKey="vdc3" />
        </Column>
        <Column width={130}>
          <HeaderCell>idc3</HeaderCell>
          <Cell dataKey="idc3" />
        </Column>
        <Column width={130}>
          <HeaderCell>idref3</HeaderCell>
          <Cell dataKey="idref3" />
        </Column>
        <Column width={130}>
          <HeaderCell>rpm3</HeaderCell>
          <Cell dataKey="rpm3" />
        </Column>
        <Column width={130}>
          <HeaderCell>tesc3</HeaderCell>
          <Cell dataKey="tesc3" />
        </Column>
        <Column width={130}>
          <HeaderCell>tmot3</HeaderCell>
          <Cell dataKey="tmot3" />
        </Column>
        {/* 4 */}
        <Column width={130}>
          <HeaderCell>vdc4</HeaderCell>
          <Cell dataKey="vdc4" />
        </Column>
        <Column width={130}>
          <HeaderCell>idc4</HeaderCell>
          <Cell dataKey="idc4" />
        </Column>
        <Column width={130}>
          <HeaderCell>idref4</HeaderCell>
          <Cell dataKey="idref4" />
        </Column>
        <Column width={130}>
          <HeaderCell>rpm4</HeaderCell>
          <Cell dataKey="rpm4" />
        </Column>
        <Column width={130}>
          <HeaderCell>tesc4</HeaderCell>
          <Cell dataKey="tesc4" />
        </Column>
        <Column width={130}>
          <HeaderCell>tmot4</HeaderCell>
          <Cell dataKey="tmot4" />
        </Column>
        {/* 5 */}
        <Column width={130}>
          <HeaderCell>vdc5</HeaderCell>
          <Cell dataKey="vdc5" />
        </Column>
        <Column width={130}>
          <HeaderCell>idc5</HeaderCell>
          <Cell dataKey="idc5" />
        </Column>
        <Column width={130}>
          <HeaderCell>idref5</HeaderCell>
          <Cell dataKey="idref5" />
        </Column>
        <Column width={130}>
          <HeaderCell>rpm5</HeaderCell>
          <Cell dataKey="rpm5" />
        </Column>
        <Column width={130}>
          <HeaderCell>tesc5</HeaderCell>
          <Cell dataKey="tesc5" />
        </Column>
        <Column width={130}>
          <HeaderCell>tmot5</HeaderCell>
          <Cell dataKey="tmot5" />
        </Column>
        {/* 6 */}
        <Column width={130}>
          <HeaderCell>vdc6</HeaderCell>
          <Cell dataKey="vdc6" />
        </Column>
        <Column width={130}>
          <HeaderCell>idc6</HeaderCell>
          <Cell dataKey="idc6" />
        </Column>
        <Column width={130}>
          <HeaderCell>idref6</HeaderCell>
          <Cell dataKey="idref6" />
        </Column>
        <Column width={130}>
          <HeaderCell>rpm6</HeaderCell>
          <Cell dataKey="rpm6" />
        </Column>
        <Column width={130}>
          <HeaderCell>tesc6</HeaderCell>
          <Cell dataKey="tesc6" />
        </Column>
        <Column width={130}>
          <HeaderCell>tmot6</HeaderCell>
          <Cell dataKey="tmot6" />
        </Column>
        {/* 7 */}
        <Column width={130}>
          <HeaderCell>vdc7</HeaderCell>
          <Cell dataKey="vdc7" />
        </Column>
        <Column width={130}>
          <HeaderCell>idc7</HeaderCell>
          <Cell dataKey="idc7" />
        </Column>
        <Column width={130}>
          <HeaderCell>idref7</HeaderCell>
          <Cell dataKey="idref7" />
        </Column>
        <Column width={130}>
          <HeaderCell>rpm7</HeaderCell>
          <Cell dataKey="rpm7" />
        </Column>
        <Column width={130}>
          <HeaderCell>tesc7</HeaderCell>
          <Cell dataKey="tesc7" />
        </Column>
        <Column width={130}>
          <HeaderCell>tmot7</HeaderCell>
          <Cell dataKey="tmot7" />
        </Column>
        {/* 8 */}
        <Column width={130}>
          <HeaderCell>vdc8</HeaderCell>
          <Cell dataKey="vdc8" />
        </Column>
        <Column width={130}>
          <HeaderCell>idc8</HeaderCell>
          <Cell dataKey="idc8" />
        </Column>
        <Column width={130}>
          <HeaderCell>idref8</HeaderCell>
          <Cell dataKey="idref8" />
        </Column>
        <Column width={130}>
          <HeaderCell>rpm8</HeaderCell>
          <Cell dataKey="rpm8" />
        </Column>
        <Column width={130}>
          <HeaderCell>tesc8</HeaderCell>
          <Cell dataKey="tesc8" />
        </Column>
        <Column width={130}>
          <HeaderCell>tmot8</HeaderCell>
          <Cell dataKey="tmot8" />
        </Column>
        {/* 9 */}
        <Column width={130}>
          <HeaderCell>vdc9</HeaderCell>
          <Cell dataKey="vdc9" />
        </Column>
        <Column width={130}>
          <HeaderCell>idc9</HeaderCell>
          <Cell dataKey="idc9" />
        </Column>
        <Column width={130}>
          <HeaderCell>idref9</HeaderCell>
          <Cell dataKey="idref9" />
        </Column>
        <Column width={130}>
          <HeaderCell>rpm9</HeaderCell>
          <Cell dataKey="rpm9" />
        </Column>
        <Column width={130}>
          <HeaderCell>tesc9</HeaderCell>
          <Cell dataKey="tesc9" />
        </Column>
        <Column width={130}>
          <HeaderCell>tmot9</HeaderCell>
          <Cell dataKey="tmot9" />
        </Column>
        {/* 10 */}
        <Column width={130}>
          <HeaderCell>vdc10</HeaderCell>
          <Cell dataKey="vdc10" />
        </Column>
        <Column width={130}>
          <HeaderCell>idc10</HeaderCell>
          <Cell dataKey="idc10" />
        </Column>
        <Column width={130}>
          <HeaderCell>idref10</HeaderCell>
          <Cell dataKey="idref10" />
        </Column>
        <Column width={130}>
          <HeaderCell>rpm10</HeaderCell>
          <Cell dataKey="rpm10" />
        </Column>
        <Column width={130}>
          <HeaderCell>tesc10</HeaderCell>
          <Cell dataKey="tesc10" />
        </Column>
        <Column width={130}>
          <HeaderCell>tmot10</HeaderCell>
          <Cell dataKey="tmot10" />
        </Column>
        {/*
        <Column width={100}>
          <HeaderCell>Gender</HeaderCell>
          <Cell dataKey="gender" />
        </Column>

        <Column width={100}>
          <HeaderCell>Age</HeaderCell>
          <Cell dataKey="age" />
        </Column>

        <Column width={200}>
          <HeaderCell>City</HeaderCell>
          <Cell dataKey="city" />
        </Column>

        <Column width={200}>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column> */}
      </Table>
    </div>
  );
};

export default TableItem;
