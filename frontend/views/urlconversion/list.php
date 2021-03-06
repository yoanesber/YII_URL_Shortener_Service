<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\widgets\LinkPager;
?>
<div class="site-contact">
    <h1>URL Management</h1>

    <p>
        
    </p>

    <div class="row" id="row-form-url-list">
        <div class="col-lg-6">
            <div class="panel panel-default">
                <div class="panel-heading">Form Task</div>
                <div class="panel-body">
                    <form id="url-form">
                        <div class="form-group">
                            <label>URL Original</label>
                            <input class="form-control" placeholder="URL" id="form-url-original">
                        </div>
                        <div class="alert alert-info" id="form-url-alert">Please fill URL above.</div>
                    </form>
                </div>
                <div class="panel-footer">
                    <div class="form-group" class="text-right">
                        <button type="button" class="btn btn-primary" id="btn-save-form-url-list">Save</button>
                        <!-- <button type="button" class="btn btn-primary" id="btn-update-form-url-list">Save</button> -->
                        <button type="button" class="btn btn-warning" id="btn-cancel-form-url-list">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row" id="row-table-url-list">
        <div class="col-lg-12">
            <button class="btn btn-primary" id="btn-add-form-url-list">Add URL</button>
            <div>&nbsp;</div>
            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Long URL</th>
                        <th>Shortened URL</th>
                        <th>Added Date</th>
                        <th>View Statistic</th>
                    </tr>
                </thead>
                <tbody>
                    <?php if (sizeof($urlconversion) > 0): ?>
                    <?php for ($i=0; $i<sizeof($urlconversion); $i++): ?>
                    <?php $curr_row = $urlconversion[$i]; ?>
                    <tr>
                        <td class="text-center"><?= $i + 1 ?></td>
                        <td><a target='_blank' href='<?= $curr_row['url_original'] ?>'><?= $curr_row['url_original'] ?></a></td>
                        <td><a target='_blank' href='<?= $curr_row['url_conversion'] ?>'><?= $curr_row['url_conversion'] ?></a></td>
                        <td><?= $curr_row['createdAt'] ?></td>
                        <td class="text-center">
                            <button class="btn btn-success btn-xs" onclick="viewStatistic(<?= $curr_row['id'] ?>)">Statistic</button>
                            <!-- <button class="btn btn-danger btn-xs" onclick="deleteUrl(<?= $curr_row['id'] ?>)">Delete</button> -->
                        </td>
                    </tr>
                    <?php endfor; ?>
                    <?php else: ?>
                    <tr>
                        <td colspan="4">No task found.</td>
                    </tr>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>
    </div>
</div>

<div class="modal fade" id="statisticModal" tabindex="-1" role="dialog" aria-labelledby="statisticModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="statisticModalLabel">Visit Statistics</h4>
            </div>
            <div class="modal-body" id="statisticModalBody">
                <div id="country_chart_div"></div>
                <div id="browser_chart_div"></div>
                <div id="platform_chart_div"></div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->