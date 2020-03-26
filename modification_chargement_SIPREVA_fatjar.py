#Ce script a pour but de preparer le gros jar du chargement SIPREVA pour la recette
# Argument : dossier de la MEP en court " xx_yy_zz.nnn"
import xml.etree.ElementTree as ET
import os
import sys
import fileinput

ECpath = sys.argv[1]+'_EC'
#"Creation du dossier de recette s'il n'existe pas"
if not os.path.isdir(ECpath):
    os.system("cp -r "+sys.argv[1]+" "+ECpath)
else:
	os.system("cp "+sys.argv[1]+"/batch/chargement_sipreva_fat.jar "+ECpath+"/batch")
#"Extraction du fichier hibernate.cfg.xml du jar"
os.system("jar -xvf "+ECpath+"/batch/chargement_sipreva_fat.jar hibernate.cfg.xml")
tree = ET.parse('hibernate.cfg.xml')
root = tree.getroot()
#"Remplacement des champs pour la recette dans hibernate.cfg.xml"
root.findall(".//property")[2].text = "pj_admec"
root.findall(".//property")[3].text = "PJ_ADMEC"
tree.write('hibernate.cfg.xml')
#"Integration du fichier hibernate.cfg.xml dans le jar"
os.system("jar -uvf "+ECpath+"/batch/chargement_sipreva_fat.jar hibernate.cfg.xml")
os.system("rm hibernate.cfg.xml")

#"Extraction du fichier log4j.properties du jar"
os.system("jar -xvf "+ECpath+"/batch/chargement_sipreva_fat.jar log4j.properties")
# Remplacement du chemin vers celle de la recette
with fileinput.FileInput("log4j.properties", inplace=True) as file:
    for line in file:
        print(line.replace("pj_admaa", "pj_admec"), end='')
#"Integration du fichier log4j.properties dans le jar"
os.system("jar -uvf "+ECpath+"/batch/chargement_sipreva_fat.jar log4j.properties")
os.system("rm log4j.properties")

print("Programme termine")