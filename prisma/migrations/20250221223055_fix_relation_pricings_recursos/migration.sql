-- CreateEnum
CREATE TYPE "Role" AS ENUM ('MASTER', 'DIRECTOR');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'DIRECTOR',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "params" (
    "id" SERIAL NOT NULL,
    "semana" DOUBLE PRECISION NOT NULL,
    "mes" INTEGER,
    "corporateallocation" DOUBLE PRECISION,
    "overhead" DOUBLE PRECISION,
    "referalfeefixo" DOUBLE PRECISION,
    "referralfeesuccessfee" DOUBLE PRECISION,
    "isspiscofins" DOUBLE PRECISION,
    "targetjc" DOUBLE PRECISION,
    "diascorridosmes" DOUBLE PRECISION,
    "diascorridosano" DOUBLE PRECISION,
    "fimanofiscalam" DATE,
    "fimanofiscalcliente" DATE,
    "payoutmd" DOUBLE PRECISION,
    "targetpayroll" DOUBLE PRECISION,

    CONSTRAINT "params_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pricings" (
    "id" SERIAL NOT NULL,
    "idusuario" INTEGER NOT NULL,
    "idparam" INTEGER NOT NULL,
    "inicioprojeto" DATE,
    "nomefase" TEXT,
    "receitatotalprojeto" DOUBLE PRECISION,
    "jobcontribution" DOUBLE PRECISION,
    "jobcontributionpercent" DOUBLE PRECISION,
    "descontoganhocomercial" DOUBLE PRECISION,
    "payrollreceita" DOUBLE PRECISION,
    "taxahoramedia" DOUBLE PRECISION,
    "jobcontributionzeropercent" DOUBLE PRECISION,
    "jobcontributionquarentapercent" DOUBLE PRECISION,
    "totaljobcontribution" DOUBLE PRECISION,
    "somentefixo" DOUBLE PRECISION,
    "receitavalorprojetadototal" DOUBLE PRECISION,
    "receitafixa" DOUBLE PRECISION,
    "receitasuccessfee" DOUBLE PRECISION,
    "despesanaoreembolsavel" DOUBLE PRECISION,
    "duracao" INTEGER,
    "semanames" TEXT,
    "contagemperiodos" TEXT,
    "alocacaoequipe" DOUBLE PRECISION,
    "receitabrutatotal" DOUBLE PRECISION,
    "receitabrutafixo" DOUBLE PRECISION,
    "receitabrutaliquida" DOUBLE PRECISION,
    "isspiscofinstotal" DOUBLE PRECISION,
    "isspiscofinsfixo" DOUBLE PRECISION,
    "isspiscofinssf" DOUBLE PRECISION,
    "receitaliquidatotal" DOUBLE PRECISION,
    "receitaliquidafixo" DOUBLE PRECISION,
    "receitaliquidasf" DOUBLE PRECISION,
    "referraltotal" DOUBLE PRECISION,
    "referralfixo" DOUBLE PRECISION,
    "referralsf" DOUBLE PRECISION,
    "corporateallocationtotal" DOUBLE PRECISION,
    "corporateallocationfixo" DOUBLE PRECISION,
    "corporateallocationsf" DOUBLE PRECISION,
    "overheadtotal" DOUBLE PRECISION,
    "overheadfixo" DOUBLE PRECISION,
    "overheadsf" DOUBLE PRECISION,
    "custoequipe" DOUBLE PRECISION,
    "despesasnaoreembolsaveis" DOUBLE PRECISION,
    "margemjobcontributiontotal" DOUBLE PRECISION,
    "margemjobcontributionfixo" DOUBLE PRECISION,
    "cashexposureacumulado" DOUBLE PRECISION,
    "duracaomeses" TEXT,
    "tempoacumuladomeses" TEXT,
    "tamanhomaxequipe" INTEGER,
    "demandahoras" INTEGER,
    "taxahoramediapadrao" DOUBLE PRECISION,
    "taxahoramediaproposta" DOUBLE PRECISION,

    CONSTRAINT "pricings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recursosnivel" (
    "id" SERIAL NOT NULL,
    "nivel" TEXT,
    "recurso" TEXT,
    "baserate" DOUBLE PRECISION,
    "payoutmin" DOUBLE PRECISION,
    "payoutmax" DOUBLE PRECISION,
    "payoutcalculado" DOUBLE PRECISION,
    "custopayout" DOUBLE PRECISION,
    "custotaxfringe" DOUBLE PRECISION,
    "custototal" DOUBLE PRECISION,
    "custotargetoccupation" DOUBLE PRECISION,
    "custoestimado" DOUBLE PRECISION,
    "custoinformado" DOUBLE PRECISION,
    "custoutilizado" DOUBLE PRECISION,
    "pricingId" INTEGER,

    CONSTRAINT "recursosnivel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "pricings" ADD CONSTRAINT "pricings_idusuario_fkey" FOREIGN KEY ("idusuario") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pricings" ADD CONSTRAINT "pricings_idparam_fkey" FOREIGN KEY ("idparam") REFERENCES "params"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recursosnivel" ADD CONSTRAINT "recursosnivel_id_fkey" FOREIGN KEY ("id") REFERENCES "params"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recursosnivel" ADD CONSTRAINT "recursosnivel_pricingId_fkey" FOREIGN KEY ("pricingId") REFERENCES "pricings"("id") ON DELETE SET NULL ON UPDATE CASCADE;
