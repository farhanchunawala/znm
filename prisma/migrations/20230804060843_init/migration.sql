-- CreateTable
CREATE TABLE `cust` (
    `sr` INTEGER NOT NULL,
    `name` VARCHAR(40) NOT NULL DEFAULT '0',
    `surname` VARCHAR(30) NULL DEFAULT '0',
    `mobile_no1` BIGINT NULL DEFAULT 0,
    `mobile_no2` BIGINT NULL DEFAULT 0,
    `mobile_no3` BIGINT NULL DEFAULT 0,

    PRIMARY KEY (`sr`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entry` (
    `garb_id` INTEGER NOT NULL,
    `sr` INTEGER NOT NULL,
    `entry_date` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `garbtype` VARCHAR(20) NOT NULL,
    `style` VARCHAR(30) NULL,
    `fit` VARCHAR(30) NULL,
    `pairing` VARCHAR(20) NULL,
    `description` VARCHAR(20) NULL,
    `submit_date` TIMESTAMP(0) NULL,
    `stitching_sp` INTEGER NULL,
    `stitching_spo` VARCHAR(30) NULL,
    `stitching_spd` INTEGER NULL,
    `fabric_id` VARCHAR(30) NULL,
    `pana` FLOAT NULL,
    `clothln` FLOAT NULL,
    `fabric_sp` INTEGER NULL,
    `fabric_spo` VARCHAR(30) NULL,
    `fabric_spd` INTEGER NULL,
    `pattern_id` VARCHAR(30) NULL,
    `pattern_sp` INTEGER NULL,
    `pattern_spo` VARCHAR(30) NULL,
    `pattern_spd` INTEGER NULL,
    `emb_id` VARCHAR(30) NULL,
    `emb_sp` INTEGER NULL,
    `emb_spo` VARCHAR(30) NULL,
    `emb_spd` INTEGER NULL,

    PRIMARY KEY (`garb_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fabric` (
    `fabric_id` INTEGER NOT NULL,
    `id_code` VARCHAR(30) NULL,
    `brand` VARCHAR(30) NULL,
    `name` VARCHAR(30) NULL,
    `fabric_type` VARCHAR(30) NULL,
    `color` VARCHAR(30) NULL,
    `texture` VARCHAR(30) NULL,
    `composition` VARCHAR(30) NULL,
    `supplier` VARCHAR(30) NULL,
    `cp` INTEGER NULL,
    `fp` INTEGER NULL,

    PRIMARY KEY (`fabric_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fabricpiece` (
    `piece_id` INTEGER NOT NULL AUTO_INCREMENT,
    `fabric_id` VARCHAR(30) NULL,
    `location` VARCHAR(30) NULL,
    `pana` FLOAT NULL,
    `clothln` FLOAT NULL,

    PRIMARY KEY (`piece_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fit` (
    `sr` INTEGER NOT NULL,
    `save_date` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `garbtype` VARCHAR(20) NOT NULL,
    `fit` VARCHAR(20) NOT NULL,
    `length` FLOAT NULL,
    `sleeve_ln` FLOAT NULL,
    `pocket_down` FLOAT NULL,
    `hala` FLOAT NULL,
    `t_chest` FLOAT NULL,
    `t_stomach` FLOAT NULL,
    `t_seat` FLOAT NULL,
    `t_bottom` FLOAT NULL,
    `collar` FLOAT NULL,
    `cuff_br` FLOAT NULL,
    `fork_ln` FLOAT NULL,
    `fork_losing` FLOAT NULL,
    `pleats` FLOAT NULL,
    `thigh_losing` FLOAT NULL,
    `lower_thigh_losing` FLOAT NULL,
    `calf_losing` FLOAT NULL,
    `bottom` FLOAT NULL,
    `cuttingfactor` FLOAT NULL,

    PRIMARY KEY (`sr`, `garbtype`, `fit`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `meas` (
    `sr` INTEGER NOT NULL,
    `measure_date` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `shoulder_ln` FLOAT NULL,
    `neck` FLOAT NULL,
    `pec` FLOAT NULL,
    `delt_ln` FLOAT NULL,
    `delt` FLOAT NULL,
    `biceps_ln` FLOAT NULL,
    `biceps` FLOAT NULL,
    `forearm_ln` FLOAT NULL,
    `forearm` FLOAT NULL,
    `arm_ln` FLOAT NULL,
    `wrist` FLOAT NULL,
    `chest_ln` FLOAT NULL,
    `chest` FLOAT NULL,
    `stomach_ln` FLOAT NULL,
    `stomach` FLOAT NULL,
    `seat_ln` FLOAT NULL,
    `seat` FLOAT NULL,
    `knee_ln` FLOAT NULL,
    `waist` FLOAT NULL,
    `thigh_ln` FLOAT NULL,
    `thigh` FLOAT NULL,
    `calf_ln` FLOAT NULL,
    `calf` FLOAT NULL,
    `ground_ln` FLOAT NULL,
    `ankle` FLOAT NULL,
    `half_delt` FLOAT NULL,
    `lat` FLOAT NULL,
    `lower_thigh_ln` FLOAT NULL,
    `lower_thigh` FLOAT NULL,

    PRIMARY KEY (`sr`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `offr` (
    `ofr_id` INTEGER NOT NULL AUTO_INCREMENT,
    `sr` INTEGER NULL,
    `ofr_type` VARCHAR(30) NULL,
    `disc` INTEGER NULL,
    `ofr_code` VARCHAR(30) NULL,
    `ofr_start` VARCHAR(30) NULL,
    `ofr_end` VARCHAR(30) NULL,

    PRIMARY KEY (`ofr_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `style` (
    `sr` INTEGER NOT NULL,
    `save_date` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `garbtype` VARCHAR(20) NOT NULL,
    `style` VARCHAR(20) NOT NULL,
    `fit` VARCHAR(20) NULL,
    `bottom_type` VARCHAR(20) NULL,
    `collar_type` VARCHAR(20) NULL,
    `cuff_ln` FLOAT NULL,
    `cuff_type` VARCHAR(20) NULL,
    `pocket_type` VARCHAR(20) NULL,
    `shoulder_type` VARCHAR(20) NULL,
    `taweez_type` VARCHAR(20) NULL,
    `belt_type` VARCHAR(20) NULL,
    `chainfly` VARCHAR(20) NULL,
    `pocket` INTEGER NULL,
    `backpocket` INTEGER NULL,
    `watchpocket` INTEGER NULL,
    `crease` VARCHAR(20) NULL,
    `note1` VARCHAR(100) NULL,
    `note2` VARCHAR(100) NULL,
    `note3` VARCHAR(100) NULL,

    PRIMARY KEY (`sr`, `garbtype`, `style`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `task` (
    `garb_id` INTEGER NOT NULL,
    `cutting` INTEGER NULL DEFAULT 0,
    `sewing` INTEGER NULL DEFAULT 0,
    `kaj` INTEGER NULL DEFAULT 0,
    `button` INTEGER NULL DEFAULT 0,
    `press` INTEGER NULL DEFAULT 0,
    `delivery` INTEGER NULL DEFAULT 0,

    PRIMARY KEY (`garb_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
