//------------------------------------------------------------------------------
// <auto-generated>
//     Этот код создан программой.
//     Исполняемая версия:4.0.30319.42000
//
//     Изменения в этом файле могут привести к неправильной работе и будут потеряны в случае
//     повторной генерации кода.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SimpleTestAuditProject
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    using ICSSoft.STORMNET.Business.Audit;
    using ICSSoft.STORMNET.Business.Audit.Objects;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Main obj.
    /// </summary>
    // *** Start programmer edit section *** (MainObj CustomAttributes)

    // *** End programmer edit section *** (MainObj CustomAttributes)
    [AutoAltered()]
    [Caption("Main obj")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("AuditView", new string[] {
            "Name as \'Name\'",
            "Field as \'Field\'",
            "MasterObj as \'Master obj\'",
            "MasterObj.MasterName as \'Master name\'",
            "Hierarchy as \'Hierarchy\'",
            "Hierarchy.Name as \'Name\'"})]
    [AssociatedDetailViewAttribute("AuditView", "DetailObj", "AuditView", true, "", "Detail obj", true, new string[] {
            ""})]
    [View("MainObjE", new string[] {
            "Name",
            "Field",
            "MasterObj",
            "MasterObj.MasterName",
            "MasterObj.MasterField",
            "Hierarchy",
            "Hierarchy.Name"})]
    [AssociatedDetailViewAttribute("MainObjE", "DetailObj", "DetailObjD", true, "", "", true, new string[] {
            ""})]
    [View("MainObjL", new string[] {
            "Name",
            "Field"})]
    public class MainObj : ICSSoft.STORMNET.DataObject, IDataObjectWithAuditFields
    {
        
        private string fName;
        
        private int fField;
        
        private System.Nullable<System.DateTime> fCreateTime;
        
        private string fCreator;
        
        private System.Nullable<System.DateTime> fEditTime;
        
        private string fEditor;
        
        private SimpleTestAuditProject.MasterObj fMasterObj;
        
        private SimpleTestAuditProject.MainObj fHierarchy;
        
        private SimpleTestAuditProject.DetailArrayOfDetailObj fDetailObj;
        
        // *** Start programmer edit section *** (MainObj CustomMembers)

        // *** End programmer edit section *** (MainObj CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (MainObj.Name CustomAttributes)

        // *** End programmer edit section *** (MainObj.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (MainObj.Name Get start)

                // *** End programmer edit section *** (MainObj.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (MainObj.Name Get end)

                // *** End programmer edit section *** (MainObj.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (MainObj.Name Set start)

                // *** End programmer edit section *** (MainObj.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (MainObj.Name Set end)

                // *** End programmer edit section *** (MainObj.Name Set end)
            }
        }
        
        /// <summary>
        /// Field.
        /// </summary>
        // *** Start programmer edit section *** (MainObj.Field CustomAttributes)

        // *** End programmer edit section *** (MainObj.Field CustomAttributes)
        public virtual int Field
        {
            get
            {
                // *** Start programmer edit section *** (MainObj.Field Get start)

                // *** End programmer edit section *** (MainObj.Field Get start)
                int result = this.fField;
                // *** Start programmer edit section *** (MainObj.Field Get end)

                // *** End programmer edit section *** (MainObj.Field Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (MainObj.Field Set start)

                // *** End programmer edit section *** (MainObj.Field Set start)
                this.fField = value;
                // *** Start programmer edit section *** (MainObj.Field Set end)

                // *** End programmer edit section *** (MainObj.Field Set end)
            }
        }
        
        /// <summary>
        /// Время создания объекта.
        /// </summary>
        // *** Start programmer edit section *** (MainObj.CreateTime CustomAttributes)

        // *** End programmer edit section *** (MainObj.CreateTime CustomAttributes)
        public virtual System.Nullable<System.DateTime> CreateTime
        {
            get
            {
                // *** Start programmer edit section *** (MainObj.CreateTime Get start)

                // *** End programmer edit section *** (MainObj.CreateTime Get start)
                System.Nullable<System.DateTime> result = this.fCreateTime;
                // *** Start programmer edit section *** (MainObj.CreateTime Get end)

                // *** End programmer edit section *** (MainObj.CreateTime Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (MainObj.CreateTime Set start)

                // *** End programmer edit section *** (MainObj.CreateTime Set start)
                this.fCreateTime = value;
                // *** Start programmer edit section *** (MainObj.CreateTime Set end)

                // *** End programmer edit section *** (MainObj.CreateTime Set end)
            }
        }
        
        /// <summary>
        /// Создатель объекта.
        /// </summary>
        // *** Start programmer edit section *** (MainObj.Creator CustomAttributes)

        // *** End programmer edit section *** (MainObj.Creator CustomAttributes)
        [StrLen(255)]
        public virtual string Creator
        {
            get
            {
                // *** Start programmer edit section *** (MainObj.Creator Get start)

                // *** End programmer edit section *** (MainObj.Creator Get start)
                string result = this.fCreator;
                // *** Start programmer edit section *** (MainObj.Creator Get end)

                // *** End programmer edit section *** (MainObj.Creator Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (MainObj.Creator Set start)

                // *** End programmer edit section *** (MainObj.Creator Set start)
                this.fCreator = value;
                // *** Start programmer edit section *** (MainObj.Creator Set end)

                // *** End programmer edit section *** (MainObj.Creator Set end)
            }
        }
        
        /// <summary>
        /// Время последнего редактирования объекта.
        /// </summary>
        // *** Start programmer edit section *** (MainObj.EditTime CustomAttributes)

        // *** End programmer edit section *** (MainObj.EditTime CustomAttributes)
        public virtual System.Nullable<System.DateTime> EditTime
        {
            get
            {
                // *** Start programmer edit section *** (MainObj.EditTime Get start)

                // *** End programmer edit section *** (MainObj.EditTime Get start)
                System.Nullable<System.DateTime> result = this.fEditTime;
                // *** Start programmer edit section *** (MainObj.EditTime Get end)

                // *** End programmer edit section *** (MainObj.EditTime Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (MainObj.EditTime Set start)

                // *** End programmer edit section *** (MainObj.EditTime Set start)
                this.fEditTime = value;
                // *** Start programmer edit section *** (MainObj.EditTime Set end)

                // *** End programmer edit section *** (MainObj.EditTime Set end)
            }
        }
        
        /// <summary>
        /// Последний редактор объекта.
        /// </summary>
        // *** Start programmer edit section *** (MainObj.Editor CustomAttributes)

        // *** End programmer edit section *** (MainObj.Editor CustomAttributes)
        [StrLen(255)]
        public virtual string Editor
        {
            get
            {
                // *** Start programmer edit section *** (MainObj.Editor Get start)

                // *** End programmer edit section *** (MainObj.Editor Get start)
                string result = this.fEditor;
                // *** Start programmer edit section *** (MainObj.Editor Get end)

                // *** End programmer edit section *** (MainObj.Editor Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (MainObj.Editor Set start)

                // *** End programmer edit section *** (MainObj.Editor Set start)
                this.fEditor = value;
                // *** Start programmer edit section *** (MainObj.Editor Set end)

                // *** End programmer edit section *** (MainObj.Editor Set end)
            }
        }
        
        /// <summary>
        /// Main obj.
        /// </summary>
        // *** Start programmer edit section *** (MainObj.MasterObj CustomAttributes)

        // *** End programmer edit section *** (MainObj.MasterObj CustomAttributes)
        [PropertyStorage(new string[] {
                "MasterObj"})]
        [NotNull()]
        public virtual SimpleTestAuditProject.MasterObj MasterObj
        {
            get
            {
                // *** Start programmer edit section *** (MainObj.MasterObj Get start)

                // *** End programmer edit section *** (MainObj.MasterObj Get start)
                SimpleTestAuditProject.MasterObj result = this.fMasterObj;
                // *** Start programmer edit section *** (MainObj.MasterObj Get end)

                // *** End programmer edit section *** (MainObj.MasterObj Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (MainObj.MasterObj Set start)

                // *** End programmer edit section *** (MainObj.MasterObj Set start)
                this.fMasterObj = value;
                // *** Start programmer edit section *** (MainObj.MasterObj Set end)

                // *** End programmer edit section *** (MainObj.MasterObj Set end)
            }
        }
        
        /// <summary>
        /// Main obj.
        /// </summary>
        // *** Start programmer edit section *** (MainObj.Hierarchy CustomAttributes)

        // *** End programmer edit section *** (MainObj.Hierarchy CustomAttributes)
        [PropertyStorage(new string[] {
                "Hierarchy"})]
        public virtual SimpleTestAuditProject.MainObj Hierarchy
        {
            get
            {
                // *** Start programmer edit section *** (MainObj.Hierarchy Get start)

                // *** End programmer edit section *** (MainObj.Hierarchy Get start)
                SimpleTestAuditProject.MainObj result = this.fHierarchy;
                // *** Start programmer edit section *** (MainObj.Hierarchy Get end)

                // *** End programmer edit section *** (MainObj.Hierarchy Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (MainObj.Hierarchy Set start)

                // *** End programmer edit section *** (MainObj.Hierarchy Set start)
                this.fHierarchy = value;
                // *** Start programmer edit section *** (MainObj.Hierarchy Set end)

                // *** End programmer edit section *** (MainObj.Hierarchy Set end)
            }
        }
        
        /// <summary>
        /// Main obj.
        /// </summary>
        // *** Start programmer edit section *** (MainObj.DetailObj CustomAttributes)

        // *** End programmer edit section *** (MainObj.DetailObj CustomAttributes)
        public virtual SimpleTestAuditProject.DetailArrayOfDetailObj DetailObj
        {
            get
            {
                // *** Start programmer edit section *** (MainObj.DetailObj Get start)

                // *** End programmer edit section *** (MainObj.DetailObj Get start)
                if ((this.fDetailObj == null))
                {
                    this.fDetailObj = new SimpleTestAuditProject.DetailArrayOfDetailObj(this);
                }
                SimpleTestAuditProject.DetailArrayOfDetailObj result = this.fDetailObj;
                // *** Start programmer edit section *** (MainObj.DetailObj Get end)

                // *** End programmer edit section *** (MainObj.DetailObj Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (MainObj.DetailObj Set start)

                // *** End programmer edit section *** (MainObj.DetailObj Set start)
                this.fDetailObj = value;
                // *** Start programmer edit section *** (MainObj.DetailObj Set end)

                // *** End programmer edit section *** (MainObj.DetailObj Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "AuditView" view.
            /// </summary>
            public static ICSSoft.STORMNET.View AuditView
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("AuditView", typeof(SimpleTestAuditProject.MainObj));
                }
            }
            
            /// <summary>
            /// "MainObjE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View MainObjE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("MainObjE", typeof(SimpleTestAuditProject.MainObj));
                }
            }
            
            /// <summary>
            /// "MainObjL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View MainObjL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("MainObjL", typeof(SimpleTestAuditProject.MainObj));
                }
            }
        }
        
        /// <summary>
        /// Audit class settings.
        /// </summary>
        public class AuditSettings
        {
            
            /// <summary>
            /// Включён ли аудит для класса.
            /// </summary>
            public static bool AuditEnabled = true;
            
            /// <summary>
            /// Использовать имя представления для аудита по умолчанию.
            /// </summary>
            public static bool UseDefaultView = false;
            
            /// <summary>
            /// Включён ли аудит операции чтения.
            /// </summary>
            public static bool SelectAudit = false;
            
            /// <summary>
            /// Имя представления для аудирования операции чтения.
            /// </summary>
            public static string SelectAuditViewName = "AuditView";
            
            /// <summary>
            /// Включён ли аудит операции создания.
            /// </summary>
            public static bool InsertAudit = true;
            
            /// <summary>
            /// Имя представления для аудирования операции создания.
            /// </summary>
            public static string InsertAuditViewName = "AuditView";
            
            /// <summary>
            /// Включён ли аудит операции изменения.
            /// </summary>
            public static bool UpdateAudit = true;
            
            /// <summary>
            /// Имя представления для аудирования операции изменения.
            /// </summary>
            public static string UpdateAuditViewName = "AuditView";
            
            /// <summary>
            /// Включён ли аудит операции удаления.
            /// </summary>
            public static bool DeleteAudit = true;
            
            /// <summary>
            /// Имя представления для аудирования операции удаления.
            /// </summary>
            public static string DeleteAuditViewName = "AuditView";
            
            /// <summary>
            /// Путь к форме просмотра результатов аудита.
            /// </summary>
            public static string FormUrl = "";
            
            /// <summary>
            /// Режим записи данных аудита (синхронный или асинхронный).
            /// </summary>
            public static ICSSoft.STORMNET.Business.Audit.Objects.tWriteMode WriteMode = ICSSoft.STORMNET.Business.Audit.Objects.tWriteMode.Synchronous;
            
            /// <summary>
            /// Максимальная длина сохраняемого значения поля (если 0, то строка обрезаться не будет).
            /// </summary>
            public static int PrunningLength = 0;
            
            /// <summary>
            /// Показывать ли пользователям в изменениях первичные ключи.
            /// </summary>
            public static bool ShowPrimaryKey = false;
            
            /// <summary>
            /// Сохранять ли старое значение.
            /// </summary>
            public static bool KeepOldValue = true;
            
            /// <summary>
            /// Сжимать ли сохраняемые значения.
            /// </summary>
            public static bool Compress = false;
            
            /// <summary>
            /// Сохранять ли все значения атрибутов, а не только изменяемые.
            /// </summary>
            public static bool KeepAllValues = false;
        }
    }
}
