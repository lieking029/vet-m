<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class ExcelExport implements WithHeadings, FromArray, ShouldAutoSize, WithStyles
{
    protected $data;
    protected $columns;
    public function __construct($data, $columns)
    {
        $this->data = $data;
        $this->columns = $columns;
    }

    //Export as array
    function array(): array
    {
        return $this->data;
    }

    //With headers
    public function headings(): array
    {
        return $this->columns;
    }
    
    //Styles for cell
    public function styles(Worksheet $sheet)
    {
        $sheet->getStyle(1)->getAlignment()->applyFromArray(
            array('horizontal' => 'center')
        );
        $sheet->getStyle(1)->getAlignment()->applyFromArray(
            array('vertical' => 'center')
        ); 
        $sheet->getStyle('U:U')
        ->getAlignment()->setWrapText(true);


        return [
            // Style the first row as bold text.
            1 => ['font' => ['bold' => true]],
        ];
       
    }
}
