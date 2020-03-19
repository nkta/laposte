#Ce script à pour but de préparer le gros jar pour la recette
# Argument : dossier de la MEP en court " xx_yy_zz.nnn"
import xml.etree.ElementTree as ET
import os
import sys

ECpath = sys.argv[0]+'_EC'
#Creation du dossier de recette s'il n'existe pas
if not os.path.isdir(ECpath):
    os.system("cp -r"+sys.argv[0]+" "+ECpath)
os.system("cp "+sys.argv[0]+"/batch/lib/pj_batch_dat.jar "+ECpath+"/batch/lib")
os.system("cd "+ECpath+"/batch/lib")
#Extraction du fichier hibernate.cfg.xml du jar
os.system("jar -xvf pj_batch_dat.jar hibernate.cfg.xml ")
tree = ET.parse('hibernate.cfg.xml')
root = tree.getroot()
#Remplacement du loguing et mot de passe dans hibernate.cfg.xml
root.findall(".//property")[2].text = "pj_admec"
root.findall(".//property")[3].text = "PJ_ADMEC"
tree.write('hibernate.cfg.xml')
#Intégration du fichier hibernate.cfg.xml dans le jar
os.system("jar -uvf pj_batch_dat.jar hibernate.cfg.xml")
os.system("cd ../../..")
print("Programme terminé")