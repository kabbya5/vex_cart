<?php

namespace App\Console\Commands;

use App\Mail\MonthlyAccountReport;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class SendMonthlyAccountReport extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'account:report';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate Account Report general entry, general ledger, trail blance, income statement, balance sheet';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        info('Accountinge Report is generating now');

        Mail::to('kabbya44@gmail.com')->send( new MonthlyAccountReport());
    }
}
