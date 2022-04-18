<html>
<style>
    body {
        font-family: Arial, Helvetica, sans-serif;
    }

    table,
    td,
    th {
        padding: 3px;
        border: 1px solid lightgray;
        border-collapse: collapse;
        text-align: center;
    }

    td {
        font-size: 12px;
    }

    th {
        font-size: 16px;
        color: black;
    }

    @page {
        header: page-header;
        footer: page-footer;
    }

    .body {
        margin: 0;
        padding: 0;
        background-color: #FAFAFA;
    }

    .header {
        text-align: center;
        font-size: 12px;
        margin: 0px;
    }

</style>

<body>
    <div class="row">
        <div class="header" style="text-align: right"> Date: <strong>{{ date('F d, Y') }}</strong>
        </div>
    </div>

    <div style="text-align: center">  
  
    <h2   ><b>{{ $report_name }}</b></h2> 
    </div> 
     
    <div class="row" style="margin-top: 15px">
        <div class="header" style="text-align: right">
            Prepared By:
            <strong>{{ $process_by }}</strong>
        </div>
    </div>
    <br>

    <table style="width: 100%">
        <!-- Header -->
        <tr>
            <th> <h6>Client Name</h6> </th>
            <th> <h6>Phone #</h6> </th>
            <th> <h6>Address</h6> </th>
            <th> <h6>Birth date</h6> </th> 
            <th> <h6>Email</h6> </th> 
            <th> <h6>Status</h6> </th>  
        </tr>
        <!-- Rows -->
        @foreach ($data as $items)
            <tr>
                <td style="width: auto; text-align: left;"> {{ $items['fullname']  }} </td>
                <td style="width: auto; text-align: left;"> {{ $items['contact_no']  }} </td>
                <td style="width: auto; text-align: left;"> {{ $items['address']  }} </td>
                <td style="width: auto; text-align: left;"> {{ $items['birth_date']  }} </td>
                <td style="width: auto; text-align: left;"> {{ $items['email']  }} </td>
                <td style="width: auto; text-align: right;"> {{ $items['active']  }} </td>  
               </tr>
        @endforeach
    </table>

    <!-- Page Number -->
    <htmlpagefooter name="page-footer">
        <p style="bottom: 0%;  ">Page {PAGENO} of {nb}</p>
    </htmlpagefooter>
</body>
</iframe>

</html>
