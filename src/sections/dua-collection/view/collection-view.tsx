import { useState, useCallback, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import { _users } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import Loader from 'src/components/loader';

import AddNewDuaForm from '../add-new-dua';
import { TableNoData } from '../table-no-data';
import { UserTableRow } from '../user-table-row';
import type { UserProps } from '../user-table-row';
import { UserTableHead } from '../user-table-head';
import { TableEmptyRows } from '../table-empty-rows';
import { UserTableToolbar } from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';
import { deleteDocument, getFromCollection } from 'src/services/firestoreService';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { toast } from 'react-toastify';
import DeleteModal from 'src/components/Modal';
import { varAlpha } from 'minimal-shared/utils';

export function CollectionView() {
  const table = useTable();
  const [duaData, setDuaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editRow, setEditRow] = useState<any>();
  const [filterName, setFilterName] = useState('');
  const [fetchData, setFetchData] = useState(false);
  const [showAddDua, setShowAddDua] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    const fetchDauData = async () => {
      setLoading(true);
      const data: any = await getFromCollection('dua_collection');
      setDuaData(data?.data);
      setLoading(false);
      setFetchData(false);
    };
    fetchDauData();
  }, [fetchData]);

  const dataFiltered: UserProps[] = applyFilter({
    inputData: duaData,
    comparator: getComparator(table.order, table.orderBy),
    filterName,
  });

  const handleConfirmDelete = async () => {
    const selectedIds = table.selected;
    if (selectedIds.length === 0) return;

    const results = await Promise.all(
      selectedIds.map((id) => deleteDocument('dua_collection', id.toString()))
    );

    const hasError = results.some((res) => !res.success);

    if (hasError) {
      toast.error('Some items failed to delete.', {
        position: 'top-right',
        theme: 'colored',
      });
    } else {
      toast.success('All selected Duas deleted successfully!', {
        position: 'top-center',
        theme: 'colored',
      });
      setFetchData(true);
    }
    setDeleteModal(false);
    table.setSelected([]);
    setFetchData(true);
  };

  const handleDeleteSelected = () => {
    setDeleteModal(true);
  };

  const handleAddDua = (newDua: any) => {};

  const notFound = !dataFiltered.length && !!filterName;

  const handleDuaData = (editData: any) => {
    setEditRow(editData);
    setShowAddDua(true);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <DashboardContent>
          <Box
            sx={{
              my: 5,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {showAddDua && (
              <Button
                color="inherit"
                sx={{ mr: 1 }}
                onClick={() => {
                  setShowAddDua(false);
                  setEditRow(null);
                }}
              >
                <KeyboardBackspaceIcon />
              </Button>
            )}
            <Typography variant="h4" sx={{ flexGrow: 1 }}>
              Dua Collection
            </Typography>
            {!showAddDua && (
              <Button
                variant="contained"
                color="inherit"
                startIcon={<Iconify icon="mingcute:add-line" />}
                onClick={() => setShowAddDua(true)}
              >
                Add New Dua
              </Button>
            )}
          </Box>

          {showAddDua ? (
            <AddNewDuaForm
              onAdd={handleAddDua}
              editRow={editRow}
              setFetchData={setFetchData}
              setShowAddDua={showAddDua}
            />
          ) : (
            <>
              <Card>
                <UserTableToolbar
                  onDeleteSelected={handleDeleteSelected}
                  numSelected={table.selected.length}
                  filterName={filterName}
                  onFilterName={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setFilterName(event.target.value);
                    table.onResetPage();
                  }}
                />

                <Scrollbar>
                  <TableContainer sx={{ overflow: 'unset' }}>
                    <Table sx={{ minWidth: 800 }}>
                      <UserTableHead
                        order={table.order}
                        orderBy={table.orderBy}
                        rowCount={duaData.length}
                        numSelected={table.selected.length}
                        onSort={table.onSort}
                        onSelectAllRows={(checked) =>
                          table.onSelectAllRows(
                            checked,
                            duaData.map((user: any) => user.id)
                          )
                        }
                        headLabel={[
                          { id: 'title', label: 'Title' },
                          { id: 'Arabic', label: 'Arabic' },
                          { id: 'transliteration', label: 'Transliteration' },
                          { id: 'translation', label: 'Translation' },
                          { id: 'description', label: 'Description' },
                          { id: 'additionalInfo', label: 'Additional Info' },
                          { id: '' },
                        ]}
                      />
                      <TableBody>
                        {dataFiltered
                          .slice(
                            table.page * table.rowsPerPage,
                            table.page * table.rowsPerPage + table.rowsPerPage
                          )
                          .map((row) => (
                            <UserTableRow
                              key={row.id}
                              row={row}
                              setFetchData={setFetchData}
                              onPressEdit={handleDuaData}
                              selected={table.selected.includes(row.id)}
                              onSelectRow={() => table.onSelectRow(row.id)}
                            />
                          ))}

                        <TableEmptyRows
                          height={68}
                          emptyRows={emptyRows(table.page, table.rowsPerPage, duaData.length)}
                        />

                        {notFound && <TableNoData searchQuery={filterName} />}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Scrollbar>

                <TablePagination
                  component="div"
                  page={table.page}
                  count={duaData.length}
                  rowsPerPage={table.rowsPerPage}
                  onPageChange={table.onChangePage}
                  rowsPerPageOptions={[5, 10, 25]}
                  onRowsPerPageChange={table.onChangeRowsPerPage}
                />
              </Card>
            </>
          )}
          <DeleteModal
            onClose={() => setDeleteModal(false)}
            open={deleteModal}
            onDelete={handleConfirmDelete}
          />
        </DashboardContent>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

export function useTable() {
  const [page, setPage] = useState(0);
  const [orderBy, setOrderBy] = useState('name');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState<any[]>([]);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  const onSort = useCallback(
    (id: string) => {
      const isAsc = orderBy === id && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    },
    [order, orderBy]
  );

  const onSelectAllRows = useCallback((checked: boolean, newSelected: string[]) => {
    if (checked) {
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  }, []);

  const onSelectRow = useCallback(
    (inputValue: any) => {
      const newSelected = selected.includes(inputValue)
        ? selected.filter((value) => value !== inputValue)
        : [...selected, inputValue];

      setSelected(newSelected);
    },
    [selected]
  );

  const onResetPage = useCallback(() => {
    setPage(0);
  }, []);

  const onChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const onChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      onResetPage();
    },
    [onResetPage]
  );

  return {
    page,
    order,
    onSort,
    orderBy,
    selected,
    rowsPerPage,
    onSelectRow,
    onResetPage,
    onChangePage,
    onSelectAllRows,
    setSelected,
    onChangeRowsPerPage,
  };
}
