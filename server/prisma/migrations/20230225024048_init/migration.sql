-- CreateTable
CREATE TABLE `Rol` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `correo` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `apellidos` VARCHAR(191) NOT NULL,
    `clave` VARCHAR(191) NOT NULL,
    `idRol` INTEGER NOT NULL,
    `estado` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoIncidencia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InfoIncidencias` (
    `idIncidencia` INTEGER NOT NULL AUTO_INCREMENT,
    `idCliente` INTEGER NULL,
    `idTipoIncidencia` INTEGER NULL,
    `tipoInformacion` VARCHAR(191) NULL,
    `mensaje` VARCHAR(191) NOT NULL,
    `imagen` VARCHAR(191) NULL,
    `estado` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idIncidencia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Horario` (
    `idHorario` INTEGER NOT NULL AUTO_INCREMENT,
    `horaInicio` DATETIME(3) NOT NULL,
    `horaFin` DATETIME(3) NOT NULL,
    `idArea` INTEGER NOT NULL,
    `estado` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idHorario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AreasReserva` (
    `idArea` INTEGER NOT NULL AUTO_INCREMENT,
    `imagen` VARCHAR(191) NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `disponibilidad` VARCHAR(191) NOT NULL,
    `precio` DECIMAL(10, 2) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idArea`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Residencias` (
    `idResidencia` INTEGER NOT NULL AUTO_INCREMENT,
    `idCondominio` INTEGER NOT NULL,
    `idCliente` INTEGER NOT NULL,
    `cantidadPersonas` INTEGER NOT NULL,
    `annoInicio` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `cantidadCarros` INTEGER NOT NULL,
    `estado` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idResidencia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rubros` (
    `idRubros` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(191) NOT NULL,
    `cobro` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`idRubros`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Plan` (
    `idPlan` INTEGER NOT NULL AUTO_INCREMENT,
    `Descripcion` VARCHAR(191) NOT NULL,
    `total` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`idPlan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gestion` (
    `idGestion` INTEGER NOT NULL AUTO_INCREMENT,
    `idResidencia` INTEGER NOT NULL,
    `idPlan` INTEGER NOT NULL,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `estado` VARCHAR(191) NOT NULL,
    `deuda` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`idGestion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reserva` (
    `idReserva` INTEGER NOT NULL AUTO_INCREMENT,
    `idCliente` INTEGER NOT NULL,
    `idHorario` INTEGER NOT NULL,
    `total` DECIMAL(10, 2) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idReserva`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PlanToRubros` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_PlanToRubros_AB_unique`(`A`, `B`),
    INDEX `_PlanToRubros_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Cliente` ADD CONSTRAINT `Cliente_idRol_fkey` FOREIGN KEY (`idRol`) REFERENCES `Rol`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InfoIncidencias` ADD CONSTRAINT `InfoIncidencias_idCliente_fkey` FOREIGN KEY (`idCliente`) REFERENCES `Cliente`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InfoIncidencias` ADD CONSTRAINT `InfoIncidencias_idTipoIncidencia_fkey` FOREIGN KEY (`idTipoIncidencia`) REFERENCES `TipoIncidencia`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Horario` ADD CONSTRAINT `Horario_idArea_fkey` FOREIGN KEY (`idArea`) REFERENCES `AreasReserva`(`idArea`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Residencias` ADD CONSTRAINT `Residencias_idCliente_fkey` FOREIGN KEY (`idCliente`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Gestion` ADD CONSTRAINT `Gestion_idPlan_fkey` FOREIGN KEY (`idPlan`) REFERENCES `Plan`(`idPlan`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Gestion` ADD CONSTRAINT `Gestion_idResidencia_fkey` FOREIGN KEY (`idResidencia`) REFERENCES `Residencias`(`idResidencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reserva` ADD CONSTRAINT `Reserva_idCliente_fkey` FOREIGN KEY (`idCliente`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reserva` ADD CONSTRAINT `Reserva_idHorario_fkey` FOREIGN KEY (`idHorario`) REFERENCES `Horario`(`idHorario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PlanToRubros` ADD CONSTRAINT `_PlanToRubros_A_fkey` FOREIGN KEY (`A`) REFERENCES `Plan`(`idPlan`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PlanToRubros` ADD CONSTRAINT `_PlanToRubros_B_fkey` FOREIGN KEY (`B`) REFERENCES `Rubros`(`idRubros`) ON DELETE CASCADE ON UPDATE CASCADE;
