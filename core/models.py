from django.db import models

# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.

class BodyMeasure(models.Model):
    sr = models.IntegerField(primary_key=True)
    measure_date = models.DateTimeField(blank=True, null=True)
    shoulder_ln = models.FloatField(blank=True, null=True)
    neck = models.FloatField(blank=True, null=True)
    pec = models.FloatField(blank=True, null=True)
    biceps_ln = models.FloatField(blank=True, null=True)
    biceps = models.FloatField(blank=True, null=True)
    arm_ln = models.FloatField(blank=True, null=True)
    wrist = models.FloatField(blank=True, null=True)
    chest_ln = models.FloatField(blank=True, null=True)
    chest = models.FloatField(blank=True, null=True)
    stomach_ln = models.FloatField(blank=True, null=True)
    stomach = models.FloatField(blank=True, null=True)
    seat_ln = models.FloatField(blank=True, null=True)
    seat = models.FloatField(blank=True, null=True)
    knee_ln = models.FloatField(blank=True, null=True)
    waist = models.FloatField(blank=True, null=True)
    thigh_ln = models.FloatField(blank=True, null=True)
    thigh = models.FloatField(blank=True, null=True)
    calf_ln = models.FloatField(blank=True, null=True)
    calf = models.FloatField(blank=True, null=True)
    ground_ln = models.FloatField(blank=True, null=True)
    ankle = models.FloatField(blank=True, null=True)
    delt_ln = models.FloatField(blank=True, null=True)
    delt = models.FloatField(blank=True, null=True)
    forearm_ln = models.FloatField(blank=True, null=True)
    forearm = models.FloatField(blank=True, null=True)
    half_delt = models.FloatField(blank=True, null=True)
    lat = models.FloatField(blank=True, null=True)
    lower_thigh_ln = models.FloatField(blank=True, null=True)
    lower_thigh = models.FloatField(blank=True, null=True)

    class Meta:
        db_table = 'body_measure'


class Entry(models.Model):
    garb_id = models.IntegerField(primary_key=True)
    sr = models.IntegerField()
    entry_date = models.DateTimeField(blank=True, null=True)
    garbtype = models.CharField(max_length=20)
    style = models.CharField(max_length=30, blank=True, null=True)
    fit = models.CharField(max_length=30, blank=True, null=True)
    pairing = models.CharField(max_length=20, blank=True, null=True)
    description = models.CharField(max_length=20, blank=True, null=True)
    submit_date = models.DateTimeField(blank=True, null=True)
    stitching_sp = models.IntegerField(blank=True, null=True)
    stitching_spo = models.CharField(max_length=30, blank=True, null=True)
    stitching_spd = models.IntegerField(blank=True, null=True)
    fabric_id = models.CharField(max_length=30, blank=True, null=True)
    pana = models.FloatField(blank=True, null=True)
    clothln = models.FloatField(blank=True, null=True)
    fabric_sp = models.IntegerField(blank=True, null=True)
    fabric_spo = models.CharField(max_length=30, blank=True, null=True)
    fabric_spd = models.IntegerField(blank=True, null=True)
    pattern_id = models.CharField(max_length=30, blank=True, null=True)
    pattern_sp = models.IntegerField(blank=True, null=True)
    pattern_spo = models.CharField(max_length=30, blank=True, null=True)
    pattern_spd = models.IntegerField(blank=True, null=True)
    emb_id = models.CharField(max_length=30, blank=True, null=True)
    emb_sp = models.IntegerField(blank=True, null=True)
    emb_spo = models.CharField(max_length=30, blank=True, null=True)
    emb_spd = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'entry'


class Fabric(models.Model):
    fabric_id = models.IntegerField(primary_key=True)
    id_code = models.CharField(max_length=30, blank=True, null=True)
    brand = models.CharField(max_length=30, blank=True, null=True)
    name = models.CharField(max_length=30, blank=True, null=True)
    fabric_type = models.CharField(max_length=30, blank=True, null=True)
    color = models.CharField(max_length=30, blank=True, null=True)
    texture = models.CharField(max_length=30, blank=True, null=True)
    composition = models.CharField(max_length=30, blank=True, null=True)
    supplier = models.CharField(max_length=30, blank=True, null=True)
    cp = models.IntegerField(blank=True, null=True)
    fp = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'fabric'


class Fabricpiece(models.Model):
    piece_id = models.AutoField(primary_key=True)
    fabric_id = models.CharField(max_length=30, blank=True, null=True)
    location = models.CharField(max_length=30, blank=True, null=True)
    pana = models.FloatField(blank=True, null=True)
    clothln = models.FloatField(blank=True, null=True)

    class Meta:
        db_table = 'fabricpiece'


class Fit(models.Model):
    sr = models.IntegerField(primary_key=True)
    save_date = models.DateTimeField(blank=True, null=True)
    garbtype = models.CharField(max_length=20)
    fit = models.CharField(max_length=20)
    length = models.FloatField(blank=True, null=True)
    sleeve_ln = models.FloatField(blank=True, null=True)
    pocket_down = models.FloatField(blank=True, null=True)
    hala = models.FloatField(blank=True, null=True)
    t_chest = models.FloatField(blank=True, null=True)
    t_stomach = models.FloatField(blank=True, null=True)
    t_seat = models.FloatField(blank=True, null=True)
    t_bottom = models.FloatField(blank=True, null=True)
    collar = models.FloatField(blank=True, null=True)
    cuff_br = models.FloatField(blank=True, null=True)
    fork_ln = models.FloatField(blank=True, null=True)
    fork_losing = models.FloatField(blank=True, null=True)
    pleats = models.FloatField(blank=True, null=True)
    thigh_losing = models.FloatField(blank=True, null=True)
    lower_thigh_losing = models.FloatField(blank=True, null=True)
    calf_losing = models.FloatField(blank=True, null=True)
    bottom = models.FloatField(blank=True, null=True)
    cuttingfactor = models.FloatField(blank=True, null=True)

    class Meta:
        db_table = 'fit'
        unique_together = (('sr', 'garbtype', 'fit'),)


class Style(models.Model):
    sr = models.IntegerField(primary_key=True)
    save_date = models.DateTimeField(blank=True, null=True)
    garbtype = models.CharField(max_length=20)
    style = models.CharField(max_length=20)
    fit = models.CharField(max_length=20, blank=True, null=True)
    bottom_type = models.CharField(max_length=20, blank=True, null=True)
    collar_type = models.CharField(max_length=20, blank=True, null=True)
    cuff_ln = models.FloatField(blank=True, null=True)
    cuff_type = models.CharField(max_length=20, blank=True, null=True)
    pocket_type = models.CharField(max_length=20, blank=True, null=True)
    shoulder_type = models.CharField(max_length=20, blank=True, null=True)
    taweez_type = models.CharField(max_length=20, blank=True, null=True)
    belt_type = models.CharField(max_length=20, blank=True, null=True)
    chainfly = models.CharField(max_length=20, blank=True, null=True)
    pocket = models.IntegerField(blank=True, null=True)
    backpocket = models.IntegerField(blank=True, null=True)
    watchpocket = models.IntegerField(blank=True, null=True)
    crease = models.CharField(max_length=20, blank=True, null=True)
    note1 = models.CharField(max_length=100, blank=True, null=True)
    note2 = models.CharField(max_length=100, blank=True, null=True)
    note3 = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        db_table = 'style'
        unique_together = (('sr', 'garbtype', 'style'),)


class Task(models.Model):
    garb_id = models.IntegerField(primary_key=True)
    cutting = models.IntegerField(blank=True, null=True)
    sewing = models.IntegerField(blank=True, null=True)
    kaj = models.IntegerField(blank=True, null=True)
    button = models.IntegerField(blank=True, null=True)
    press = models.IntegerField(blank=True, null=True)
    delivery = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'task'


class User(models.Model):
    sr = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=40)
    surname = models.CharField(max_length=30, blank=True, null=True)
    mobile_no1 = models.BigIntegerField(blank=True, null=True)
    mobile_no2 = models.BigIntegerField(blank=True, null=True)
    mobile_no3 = models.BigIntegerField(blank=True, null=True)

    class Meta:
        db_table = 'user'




class PmaBookmark(models.Model):
    dbase = models.CharField(max_length=255)
    user = models.CharField(max_length=255)
    label = models.CharField(max_length=255, db_collation='utf8_general_ci')
    query = models.TextField()

    class Meta:
        managed = False
        db_table = 'pma__bookmark'


class PmaCentralColumns(models.Model):
    db_name = models.CharField(primary_key=True, max_length=64)
    col_name = models.CharField(max_length=64)
    col_type = models.CharField(max_length=64)
    col_length = models.TextField(blank=True, null=True)
    col_collation = models.CharField(max_length=64)
    col_isnull = models.IntegerField(db_column='col_isNull')  # Field name made lowercase.
    col_extra = models.CharField(max_length=255, blank=True, null=True)
    col_default = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'pma__central_columns'
        unique_together = (('db_name', 'col_name'),)


class PmaColumnInfo(models.Model):
    db_name = models.CharField(max_length=64)
    table_name = models.CharField(max_length=64)
    column_name = models.CharField(max_length=64)
    comment = models.CharField(max_length=255, db_collation='utf8_general_ci')
    mimetype = models.CharField(max_length=255, db_collation='utf8_general_ci')
    transformation = models.CharField(max_length=255)
    transformation_options = models.CharField(max_length=255)
    input_transformation = models.CharField(max_length=255)
    input_transformation_options = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'pma__column_info'
        unique_together = (('db_name', 'table_name', 'column_name'),)


class PmaDesignerSettings(models.Model):
    username = models.CharField(primary_key=True, max_length=64)
    settings_data = models.TextField()

    class Meta:
        managed = False
        db_table = 'pma__designer_settings'


class PmaExportTemplates(models.Model):
    username = models.CharField(max_length=64)
    export_type = models.CharField(max_length=10)
    template_name = models.CharField(max_length=64)
    template_data = models.TextField()

    class Meta:
        managed = False
        db_table = 'pma__export_templates'
        unique_together = (('username', 'export_type', 'template_name'),)


class PmaFavorite(models.Model):
    username = models.CharField(primary_key=True, max_length=64)
    tables = models.TextField()

    class Meta:
        managed = False
        db_table = 'pma__favorite'


class PmaHistory(models.Model):
    id = models.BigAutoField(primary_key=True)
    username = models.CharField(max_length=64)
    db = models.CharField(max_length=64)
    table = models.CharField(max_length=64)
    timevalue = models.DateTimeField()
    sqlquery = models.TextField()

    class Meta:
        managed = False
        db_table = 'pma__history'


class PmaNavigationhiding(models.Model):
    username = models.CharField(primary_key=True, max_length=64)
    item_name = models.CharField(max_length=64)
    item_type = models.CharField(max_length=64)
    db_name = models.CharField(max_length=64)
    table_name = models.CharField(max_length=64)

    class Meta:
        managed = False
        db_table = 'pma__navigationhiding'
        unique_together = (('username', 'item_name', 'item_type', 'db_name', 'table_name'),)


class PmaPdfPages(models.Model):
    db_name = models.CharField(max_length=64)
    page_nr = models.AutoField(primary_key=True)
    page_descr = models.CharField(max_length=50, db_collation='utf8_general_ci')

    class Meta:
        managed = False
        db_table = 'pma__pdf_pages'


class PmaRecent(models.Model):
    username = models.CharField(primary_key=True, max_length=64)
    tables = models.TextField()

    class Meta:
        managed = False
        db_table = 'pma__recent'


class PmaRelation(models.Model):
    master_db = models.CharField(primary_key=True, max_length=64)
    master_table = models.CharField(max_length=64)
    master_field = models.CharField(max_length=64)
    foreign_db = models.CharField(max_length=64)
    foreign_table = models.CharField(max_length=64)
    foreign_field = models.CharField(max_length=64)

    class Meta:
        managed = False
        db_table = 'pma__relation'
        unique_together = (('master_db', 'master_table', 'master_field'),)


class PmaSavedsearches(models.Model):
    username = models.CharField(max_length=64)
    db_name = models.CharField(max_length=64)
    search_name = models.CharField(max_length=64)
    search_data = models.TextField()

    class Meta:
        managed = False
        db_table = 'pma__savedsearches'
        unique_together = (('username', 'db_name', 'search_name'),)


class PmaTableCoords(models.Model):
    db_name = models.CharField(primary_key=True, max_length=64)
    table_name = models.CharField(max_length=64)
    pdf_page_number = models.IntegerField()
    x = models.FloatField()
    y = models.FloatField()

    class Meta:
        managed = False
        db_table = 'pma__table_coords'
        unique_together = (('db_name', 'table_name', 'pdf_page_number'),)


class PmaTableInfo(models.Model):
    db_name = models.CharField(primary_key=True, max_length=64)
    table_name = models.CharField(max_length=64)
    display_field = models.CharField(max_length=64)

    class Meta:
        managed = False
        db_table = 'pma__table_info'
        unique_together = (('db_name', 'table_name'),)


class PmaTableUiprefs(models.Model):
    username = models.CharField(primary_key=True, max_length=64)
    db_name = models.CharField(max_length=64)
    table_name = models.CharField(max_length=64)
    prefs = models.TextField()
    last_update = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'pma__table_uiprefs'
        unique_together = (('username', 'db_name', 'table_name'),)


class PmaTracking(models.Model):
    db_name = models.CharField(primary_key=True, max_length=64)
    table_name = models.CharField(max_length=64)
    version = models.PositiveIntegerField()
    date_created = models.DateTimeField()
    date_updated = models.DateTimeField()
    schema_snapshot = models.TextField()
    schema_sql = models.TextField(blank=True, null=True)
    data_sql = models.TextField(blank=True, null=True)
    tracking = models.CharField(max_length=188, blank=True, null=True)
    tracking_active = models.PositiveIntegerField()

    class Meta:
        managed = False
        db_table = 'pma__tracking'
        unique_together = (('db_name', 'table_name', 'version'),)


class PmaUserconfig(models.Model):
    username = models.CharField(primary_key=True, max_length=64)
    timevalue = models.DateTimeField()
    config_data = models.TextField()

    class Meta:
        managed = False
        db_table = 'pma__userconfig'


class PmaUsergroups(models.Model):
    usergroup = models.CharField(primary_key=True, max_length=64)
    tab = models.CharField(max_length=64)
    allowed = models.CharField(max_length=1)

    class Meta:
        managed = False
        db_table = 'pma__usergroups'
        unique_together = (('usergroup', 'tab', 'allowed'),)


class PmaUsers(models.Model):
    username = models.CharField(primary_key=True, max_length=64)
    usergroup = models.CharField(max_length=64)

    class Meta:
        managed = False
        db_table = 'pma__users'
        unique_together = (('username', 'usergroup'),)

