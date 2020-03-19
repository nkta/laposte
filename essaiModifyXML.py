import xml.etree.ElementTree as ET
tree = ET.parse('hibernate.cfg.xml')
root = tree.getroot()
print(root.tag)
print(root.findall(".//property/*[@name='hibernate.connection.username']").text)
print(root.findall(".//property/*[@name='hibernate.connection.password']").text)
root.findall(".//property/*[@name='hibernate.connection.username']").text = "pj_admaa"
root.findall(".//property/*[@name='hibernate.connection.password']").text = "PJ_ADMAA"
print(root.findall(".//property/*[@name='hibernate.connection.username']").text)
print(root.findall(".//property/*[@name='hibernate.connection.password']").text)
tree.write('hibernate.cfg.xml')